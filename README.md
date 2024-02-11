# Google-Translate-on-terminal
Have Google Translate service on a node js terminal, in non-GUI browser way, a.k.a text or headless browser.   
No API nor restricting terms of condition is involved at all     

### Requirement  
- Node js  
- Its library:   
 - Playwright  

### Usage  
Two mode:   
- type or paste the source text as the script argument directly on shell prompt   
- type or paste the source text in the script entry/prompt input after get it running   

It defaults to translate to target language of English   
Append source text with string `=<language code>,...` in order to translate to other(s)  

e.g.  
```
gxl.js
1: En regardant la terre sculptée sur le continent asiatique et la région asiatique européenne

* In English:      (French - Detected - source)
looking at the earth carved on the Asian continent and the European Asian region

```

Append it with `=fr,de,es` in order to translate to French, Germany and Spanish, then the Default target language become Spanish, the last code specified   
If append it further with `,` a comma to become `=fr,de,es,` instead, it will translate to French, Germany, Spanish and English (the current target language)    
and the Default target language will not change, keep being English   

TODO: TOO MANY   
at least:   
- Find which input (prompt) method is better which can do like Bash or most shell prompt/readline can   
- Find why it's significantly slower than real browser   
- TTS (Text To Speech)  
