# metaworld_full_grab.py
# Drop this in an empty folder and run → python metaworld_full_grab.py

import requests, time
from bs4 import BeautifulSoup
from tqdm import tqdm

import os, json
from urllib.parse import unquote_plus

BASE = "/https://web.archive.org/web/20190430160740/https://www.royalroad.com/fiction/14167/metaworld-chronicles/chapter/179793/chapter-765-interlude-3-dark-waters"

OUT_DIR = "metaworld_html"
os.makedirs(OUT_DIR, exist_ok=True)

headers = {"User-Agent": "Mozilla/5.0 (Wayback-friendly crawler)"}

ent = BASE.split('/')
            
#self.send_custom_text(f"Metaworld Fetching Path: {path[1:]}...")
chapter_key = ent[-1]
local_file = os.path.join(OUT_DIR, f"{ent[-1]}.html")

def loadFile(path):
    time.sleep(0.5)
    if 1:
        if os.path.exists(local_file):
            with open(local_file, "r", encoding="utf-8") as f:
                content = f.read()
                if len(content) > 0:
                    #print(f"Loaded file: {ent[-1]}")
                    soup = BeautifulSoup(content, "html.parser")
                    
                    novel = {
                        'id': ent[10],
                        'name': soup.find("div", class_="fic-header").find("h2").text,
                        'url': '/https://web.archive.org' + soup.find("div", class_="fic-header").find("a").attrs.get('href'),
                        'chapter': {
                            'id': ent[13],
                            'name': soup.find("div", class_="fic-header").find("h1").text,
                            'url': path[1:]
                        }
                    }
                    
                    nav = soup.find("div", class_="nav-buttons").find_all("a")
                    
                    print(f"Loaded {novel['chapter']['name']} from file")
                    
                    #if len(nav) == 2:
                    #path = '/https://web.archive.org' + nav[-1].attrs.get('href')
                    loadFile('/https://web.archive.org' + nav[-1].attrs.get('href'))
                        
                        
                        #print(len(nav))
                        #print('/https://web.archive.org' + nav[-1].attrs.get('href'))
                        
                        #print(novel)
                        #content = self.parse_royalroad(path, soup)
                        #content = links + content
                        #nav.attrs.get('href')
                        #nav.text.strip()
                    #self.send_custom_html(content)
                    #print(f"Loaded file: {ent[-1]}")
                    return

        url = path[1:]
        try:
            #print("try remote")
            #print(path)
            return
            r = requests.get(url, headers=headers, timeout=20)
            
            #if "Gwen" not in r.text or "This URL has been excluded" in r.text:
            if "This URL has been excluded" in r.text:
                print("Blocked or irrelevant capture")
                return
            
            soup = BeautifulSoup(r.text, "html.parser")
            content_div = soup.find("div", class_="chapter-inner chapter-content")
            #content_div = self.parse_royalroad(path, soup)
            if not content_div:
                print("No chapter-inner found")
                return
            
            #clean_html = f"<h1>Chapter {chapter_key}</h1>\n" + str(content_div)
            clean_html = r.text
            
            # Save for next time
            os.makedirs(OUT_DIR, exist_ok=True)
            with open(local_file, "w", encoding="utf-8") as f:
                f.write(clean_html)

            #self.send_custom_html(content_div)
            print(f"Saved: {ent[-1]}")
            
            novel = {
                'id': ent[10],
                'name': soup.find("div", class_="fic-header").find("h2").text,
                'url': '/https://web.archive.org' + soup.find("div", class_="fic-header").find("a").attrs.get('href'),
                'chapter': {
                    'id': ent[13],
                    'name': soup.find("div", class_="fic-header").find("h1").text,
                    'url': path[1:]
                }
            }
            
            nav = soup.find("div", class_="nav-buttons").find_all("a")
            
            print(f"Loaded {novel['chapter']['name']} from wayback machine")
            
            if len(nav) == 2:
                #path = '/https://web.archive.org' + nav[-1].attrs.get('href')
                loadFile('/https://web.archive.org' + nav[-1].attrs.get('href'))
            
            return
            
        except requests.exceptions.RequestException as e:
            self.send_custom_text(f"Fetch failed: {e}")
        except Exception as e:
            self.send_custom_text(f"Unexpected error: {e}")
        except:
            self.send_custom_text(f"No data")

loadFile(BASE)
#print("Done → Metaworld_Complete.html ready for TTS")