'''
1. Listen your voice
2. Quá thời gian => Có thể nhấn enter đẻ bắt đầu nói
3. Voice to Text => Gửi lên Simsimi => Response the voice message
Quay lại bước 1
Note:
- Class SpeechToText, Chatbot, TextToSpeech
'''

import requests as rq
import json
import speech_recognition as sr
import pyttsx3


class SpeechToText:
    lang = ""
    def __init__(self, lang):
        self.lang = lang
    def listen(self):
        bot_ear = sr.Recognizer()
        with sr.Microphone() as Mic:
            print("Listen your voice...")
            request = bot_ear.listen(Mic)
        try:
            speaker = bot_ear.recognize_google(request, language=self.lang)
        except:
            speaker = '...'
        print("You: ", speaker)
        return speaker

class ChatBot:
    def __init__(self, lang):
        self.url = "https://wsapi.simsimi.com/190410/talk"
        self.lang = lang
    def Request(self, message):
        payload = '{\n            "utext": "' + message + '", \n            "lang": "'+self.lang+'" \n     }'
        headers = {
            'Content-Type': "application/json",
            'x-api-key': "mix3fkNYFRMVzbbOsRlcD3H1o~ZZTt85dxtWQaph"
        }
        response = rq.post(self.url, data=payload.encode('utf-8'), headers=headers)
        ans = json.loads(response.text)
        print("Simsimi:", ans["atext"])
        return ans["atext"]


class TextToSpeech:
    def Speak(self, ans, lang):
        mouth = pyttsx3.init()
        # voices = mouth.getProperty("voices")
        if lang == "en":
            vi_voice_id = "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\TTS_MS_EN-US_DAVID_11.0"
            mouth.setProperty("voice", vi_voice_id)
            mouth.say(ans)
            mouth.runAndWait()
        elif lang == "vi":
            vi_voice_id = "HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Speech\Voices\Tokens\MSTTS_V110_viVN_An"
            mouth.setProperty("voice", vi_voice_id)
            mouth.say(ans)
            mouth.runAndWait()

lang = int(input("Nhập 1 để chọn Tiếng Việt, type 2 to choose English: "))
if lang == 1:
    while True:
        ques = SpeechToText.listen(self=SpeechToText(lang='vi-VN'))
        ans = ChatBot.Request(self=ChatBot(lang="vi"), message=ques)
        TextToSpeech.Speak(self=TextToSpeech(), ans=ans, lang="vi")
elif lang == 2:
    while True:
        ques = SpeechToText.listen(self=SpeechToText(lang='en'))
        ans = ChatBot.Request(self=ChatBot(lang="en"), message=ques)
        TextToSpeech.Speak(self=TextToSpeech(), ans=ans, lang="en")
else:
    print("Không tồn tại ngôn ngữ muốn chọn!")

