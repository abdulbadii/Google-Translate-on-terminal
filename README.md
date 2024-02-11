# Google-Translate-on-terminal
Have Google Translate service on a node js terminal, in non-GUI browser way, a.k.a text or headless browser.   
No API nor restricting terms of condition at all involved     

### Requirement  
- Node js  
- Its library:   
 - Playwright  

### Usage  
Two mode:   
- type or paste the source text as the script argument directly on shell prompt   
- type or paste the source text after get the script running   

It defaults to translate to target language of English   
Append source text with string `=<language code>,...` in order to translate to other(s)  

e.g.  
```
gxl.js
1: En regardant la terre sculptée sur le continent asiatique et la région asiatique européenne

looking at the earth carved on the Asian continent and the European Asian region
* In English:      (French - Detected - source)
```

Append it with `=fr,de,es` in order to translate to French, Germany and Spanish, then the Default target language become Spanish, the last code specified   
If append it with `=fr,de,es,` instead, it will translate to French, Germany, Spanish and English (the current target language)
and the Default target language will not change

TO
