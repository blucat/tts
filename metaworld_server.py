# metaworld_server.py
# Python 3 — just run:  python metaworld_server.py
# Then open http://localhost:8000/ in your browser (or point your TTS scraper there)

import requests, time
from bs4 import BeautifulSoup
from tqdm import tqdm

import http.server
import socketserver
import os, json
from urllib.parse import unquote_plus

PORT = 9094
DIRECTORY = "."   # current folder — change if you want a subfolder

OUT_DIR = "metaworld_html"
os.makedirs(OUT_DIR, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Wayback-friendly crawler)"}

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def do_GET(self):
        path = unquote_plus(self.path.split('?')[0])   # strip query string

        # ←←← YOUR CUSTOM PATHS GO HERE ←←← #https://web.archive.org/web/20190430013218/https://www.royalroad.com/fiction/14167/metaworld-chronicles/chapter/163618/chapter-2-awakening
        
        if "web.archive.org" in path and "royalroad.com" in path:
            ent = path.split('/')
            #self.send_custom_text(f"Metaworld Fetching Path: {path[1:]}...")
            chapter_key = ent[-1]
            local_file = os.path.join(OUT_DIR, f"{ent[-1]}.html")
            
            if os.path.exists(local_file):
                with open(local_file, "r", encoding="utf-8") as f:
                    content = f.read()
                    if len(content) > 0:
                        if "script" in content:
                            soup = BeautifulSoup(content, "html.parser")
                            nav = soup.find("div", class_="nav-buttons").find_all("a")
                            links = '<div class="nav-buttons">'
                            
                            for item in nav:
                                links += '<a href="/https://web.archive.org' + item.attrs.get('href') + '">' + item.text.strip() + '</a>'
                            
                            links += '</div>'
                            content = soup.find("div", class_="chapter-inner chapter-content")
                            style = "<style>body {color: rgba(255, 255, 255, .6);background:#171717;font-family: Arial, sans-serif; font-size: 18px; line-height: 160%;}</style>"
                            content = f"{style}<h1>{chapter_key}</h1>\n{links}\n" + str(content)
                            #content = links + content
                            #nav.attrs.get('href')
                            #nav.text.strip()
                        self.send_custom_html(content)
                        return
            
            url = path[1:]
            try:
                r = requests.get(url, headers=headers, timeout=20)
                
                if "Gwen" not in r.text or "This URL has been excluded" in r.text:
                    self.send_custom_text("Blocked or irrelevant capture")
                    return
                
                #soup = BeautifulSoup(r.text, "html.parser")
                #content_div = soup.find("div", class_="chapter-inner chapter-content")
                if not content_div:
                    self.send_custom_text("No chapter-inner found")
                    return
                
                #clean_html = f"<h1>Chapter {chapter_key}</h1>\n" + str(content_div)
                clean_html = r.text
                
                # Save for next time
                os.makedirs(OUT_DIR, exist_ok=True)
                with open(local_file, "w", encoding="utf-8") as f:
                    f.write(clean_html)

                self.send_custom_html(content_div)
                
            except requests.exceptions.RequestException as e:
                self.send_custom_text(f"Fetch failed: {e}")
            except Exception as e:
                self.send_custom_text(f"Unexpected error: {e}")
            except:
                self.send_custom_text(f"No data")
            return
        
        if "/chapter/" in path:
            ent = path.split('/')
            self.send_custom_text(f"Metaworld Fetching Chapter {ent[-1]}...")
            return
        
        if path == "/22":
            self.send_custom_json({"chapter": 22, "title": "The One Where Gwen Breaks Reality Again", "status": "complete"})
            return

        if path == "/api/status":
            self.send_custom_text("Metaworld server running – all 437 chapters ready")
            return

        if path == "/missing":
            self.send_custom_json([42, 117, 305])   # example list of missing chapters
            return
        # ←←← add more custom paths above this line ←←←

        # Everything else → normal file serving
        return super().do_GET()

    # Helper shortcuts so you don’t repeat boilerplate
    def send_custom_json(self, data):
        payload = json.dumps(data, indent=2).encode('utf-8')
        self.send_response(200)
        self.send_header("Content-Type", "application/json")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def send_custom_text(self, text):
        payload = text.encode('utf-8')
        self.send_response(200)
        self.send_header("Content-Type", "text/plain; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    def send_custom_html(self, html):
        payload = html.encode('utf-8')
        self.send_response(200)
        self.send_header("Content-Type", "text/html; charset=utf-8")
        self.send_header("Content-Length", str(len(payload)))
        self.end_headers()
        self.wfile.write(payload)

    # Optional: auto-list all chapters on root /
    def list_directory(self, path):
        if self.path != "/":
            return super().list_directory(path)

        files = sorted([f for f in os.listdir(DIRECTORY) 
                       if f.lower().endswith(".html") and f.startswith("ch")])
        
        html = """<!doctype html>
        <title>Metaworld Chronicles — local</title>
        <body style="background:#111;color:#ddd;font-family:sans-serif">
        <h1>Metaworld Chronicles — complete local copy</h1>
        <ol style="line-height:1.8">"""
        
        for f in files:
            chap = f.replace(".html","").replace("ch","")
            html += f'<li><a href="/{f}" style="color:#8f8">${f}</a> — Chapter {chap}</li>\n'
        
        html += "</ol></body></html>"
        self.send_response(200)
        self.send_header("Content-type", "text/html; charset=utf-8")
        self.end_headers()
        self.wfile.write(html.encode("utf-8"))
        return None

print(f"Serving Metaworld on http://localhost:{PORT}/")
print("Ctrl+C to stop")
with socketserver.TCPServer(("", PORT), Handler) as httpd:
    httpd.serve_forever()