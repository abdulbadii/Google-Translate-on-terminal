#!/usr/bin/env node
const stdin=process.stdin, stdout=process.stdout,
{chromium} = require('playwright');
const readline = require('node:readline');
const rl = readline.createInterface({ input:stdin, output:stdout });

const Lang = new Map([
//['aa', 'Afar'],
//['ab', 'Abkhazian'],
['af', 'Afrikaans'],
//['ak', 'Akan'],
['sq', 'Albanian'],
['am', 'Amharic'],
['ar', 'Arabic'],
//['an', 'Aragonese'],
['hy', 'Armenian'],
['as', 'Assamese'],
//['av', 'Avaric'],
//['ae', 'Avestan'],
['ay', 'Aymara'],
['az', 'Azerbaijani'],
['bm', 'Bambara'],
//['ba', 'Bashkir'],
['eu', 'Basque'],
['be', 'Belarusian'],
['bn', 'Bengali/Bangla'],
['bh', 'Bihari'],
['bhoj', 'Bhojpuri'],
//['bi', 'Bislama'],
['bs', 'Bosnian'],
//['br', 'Breton'],
['bg', 'Bulgarian'],
['ca', 'Catalan'],
//['ch', 'Chamorro'],
['ceb', 'Cebuano'],
//['ce', 'Chechen'],
//['cv', 'Chuvash'],
//['kw', 'Cornish'],
['co', 'Corsican'],
//['cr', 'Cree'],
['hr', 'Croatian'],
['cs', 'Czech'],
['da', 'Danish'],
['dv', 'Dhivehi, Maldivian'],
//['dz', 'Dzongkha'],
['en', 'English'],
['eo', 'Esperanto'],
['et', 'Estonian'],
['ee', 'Ewe'],
//['fo', 'Faroese'],
//['fj', 'Fijian'],
['fi', 'Finnish'],
['fr', 'French'],
//['ff', 'Fula/Fulah, Pular/Pulaar'],
['gl', 'Galician'],
//['gd', 'Gaelic (Scottish)'],
//['gv', 'Gaelic (Manx)'],
['ka', 'Georgian'],
['de', 'German'],
['el', 'Greek'],
['gn', 'Guarani'],
['gu', 'Gujarati'],
['ht', 'Haitian Creole'],
['ha', 'Hausa'],
['he', 'Hebrew'],
['hz', 'Herero'],
['hi', 'Hindi'],
['ho', 'Hiri Motu'],
['hu', 'Hungarian'],
['is', 'Icelandic'],
//['io', 'Ido'],
//['ig', 'Igbo'],
//['ia', 'Interlingua'],
['id', 'Indonesian'],
//['ie', 'Interlingue'],
//['iu', 'Inuktitut'],
//['ik', 'Inupiak'],
['ga', 'Irish'],
['gom', 'Konkani'],
['it', 'Italian'],
['ja', 'Japanese'],
['jv', 'Javanese'],
//['kl', 'Kalaallisut, Greenlandic'],
['kn', 'Kannada'],
//['kr', 'Kanuri'],
//['ks', 'Kashmiri'],
['kk', 'Kazakh'],
['km', 'Khmer'],
//['ki', 'Kikuyu'],
['rw', 'Kinyarwanda (Rwanda)'],
//['rn', 'Kirundi'],
['ky', 'Kyrgyz'],
['kv', 'Komi'],
//['kg', 'Kongo'],
['ko', 'Korean'],
['ku', 'Kurdish'],
//['kj', 'Kwanyama'],
['lo', 'Lao'],
['la', 'Latin'],
['lv', 'Latvian (Lettish)'],
//['li', 'Limburgish/Limburger'],
['ln', 'Lingala'],
['lt', 'Lithuanian'],
['lu', 'Luga-Katanga'],
['lg', 'Luganda, Ganda'],
['lb', 'Luxembourgish'],
['lus', 'Mizo'],
//['gv', 'Manx'],
['mai', 'Maithili'],
['mg', 'Malagasy'],
['mk', 'Macedonian'],
['ms', 'Malay'],
['ml', 'Malayalam'],
['mn', 'Mongolian'],
['mni-Mtei', 'Meiteilon (Manipuri)'],
['mt', 'Maltese'],
['mi', 'Maori'],
['mr', 'Marathi'],
//['mh', 'Marshallese'],
//['mo', 'Moldavian'],
['my', 'Myanmar'],
//['na', 'Nauru'],
//['nv', 'Navajo'],
//['ng', 'Ndonga'],
//['nd', 'Northern Ndebele'],
['ne', 'Nepali'],
['no', 'Norwegian'],
//['nb', 'Norwegian bokmål'],
['nl', 'Dutch'],
//['nn', 'Norwegian nynorsk'],
['ny', 'Chichewa, Chewa, Nyanja'],
//['ii', 'Nuosu'],
//['oc', 'Occitan'],
//['oj', 'Ojibwe'],
//['cu', 'Old Bulgarian (Church Slavonic)'],
['or', 'Oriya'],
['om', '(Afaan) Oromo'],
//['os', 'Ossetian'],
//['pi', 'Pāli'],
['ps', 'Pashto/Pushto'],
['fa', 'Persian/Farsi'],
['pl', 'Polish'],
['pt', 'Portuguese'],
['pa', 'Punjabi (Eastern)'],
['qu', 'Quechua'],
//['rm', 'Romansh'],
['ro', 'Romanian'],
['ru', 'Russian'],
//['se', 'Sami'],
['sm', 'Samoan'],
//['sg', 'Sango'],
['sa', 'Sanskrit'],
['sr', 'Serbian'],
//['sh', 'Serbo-Croatian'],
['st', 'Sesotho'],
//['tn', 'Setswana'],
['sn', 'Shona'],
//['ii', 'Sichuan Yi'],
['sd', 'Sindhi'],
['si', 'Sinhala/Sinhalese'],
//['ss', 'Siswati'],
['sk', 'Slovak'],
['sl', 'Slovenian'],
['so', 'Somali'],
//['nr', 'Southern Ndebele'],
['es', 'Spanish'],
['su', 'Sundanese'],
['sw', 'Swahili (Kiswahili)'],
//['ss', 'Swati'],
['sv', 'Swedish'],
['tg', 'Tajik'],
['ta', 'Tamil'],
['tt', 'Tatar'],
//['tl', 'Tagalog'],
//['ty', 'Tahitian'],
['te', 'Telugu'],
['th', 'Thai'],
//['bo', 'Tibetan'],
['ti', 'Tigrinya'],
//['to', 'Tonga'],
['ts', 'Tsonga'],
['tr', 'Turkish'],
['tk', 'Turkmen'],
['tw', 'Twi'],
['ug', 'Uyghur'],
['uk', 'Ukrainian'],
['ur', 'Urdu'],
['uz', 'Uzbek'],
//['ve', 'Venda'],
['vi', 'Vietnamese'],
//['vo', 'Volapük'],
//['wa', 'Wallon'],
['cy', 'Welsh'],
//['wo', 'Wolof'],
//['fy', 'Western Frisian'],
['xh', 'Xhosa'],
['ji', 'Yiddish	yi'],
['yo', 'Yoruba'],
//['za', 'Zhuang, Chuang'],
['zh', 'Chinese'],
['zh-Hans', 'Chinese (Simplified)'],
['zh-Hant', 'Chinese (Traditional)'],
['zu', 'Zulu']]);

async function gtranslate( cli, tl) {
  if (!cli) await console.log("\t* Put new multiline entry * Remember: hit 'Enter' twice to end it *");
  const chrom = await chromium.launch();
  const page = await chrom.newPage();
  //on user agent need, put one in its place and..
  //const context = await chrom.newContext( {userAgent: ''});
  //const page = await context.newPage(); //<= use this page instead
  const
  com   = 'body > c-wiz > div > div.ToWKne > c-wiz > div > c-wiz > div > div',
  slSel = com +'> c-wiz > div > c-wiz > div:nth-child(2) > div > div > div > div > span > button > span > span',
  pre = com +'> div > c-wiz',
  inpSel = pre +'> span > span > div >textarea',
  pReSel =  pre +'> div > div > div > div > span',
  //reSel3_7 =  pReSel +'> span:nth-child(n+3):nth-child(-n+7) > span',
  reSel =  pReSel +'> span > span';
  let sl, slE, resE, prvin, prv, rsp, ctl='en', inp;

  do {
   let lnum=0;
   if (cli) {inp = cli; cli=''}
   else {
    rl.setPrompt(++lnum+': ');rl.prompt();
    [inp, tl] = await new Promise( r=>{
     let t, lns='';
     rl.on( 'line', l =>{
      if (l=='') { --lnum; r([lns.trim(), t])}
      else {
       rl.setPrompt(++lnum+': ');rl.prompt();
       if (t = l.match(/^(.+?)\s+=((?:,?[a-z]{2})+,?)\s*$/)) {
        l = t[1];
        t = t[2];
        lns += l.trim();
        r([lns, t])
       }
       else lns += l.trim() +' '
      }
     })
    })
   }
   rl.removeAllListeners('line');
   if (!inp) break;
   if (inp===prvin && !tl) {console.log('* Same to the previous entry.. skipped');continue}
   prvin = inp;
   stdout.write("Requesting Google Translate service... Be patient, it's slower than real browser");stdout.cursorTo(0);
   let F=1, i=0, e, res;
   if (tl) {
    if (tl.match(/,$/)) tl+=ctl;
    else if (tl.match(/^,/)) tl=ctl+tl;
    try {
     for (e of tl.split(',')) {
      if (!Lang.has(e)) {
       console.log(e+' : language code is not recognized');e='en'; continue }
      rsp = await page.goto('https://translate.google.com/?sl=auto&tl='+e+'&text='+inp+'&op=translate');
      //on so rare word input, server returns mere previous result
      do
       res = await (await page.waitForSelector( reSel,{visible:true})).evaluate( e=>e.textContent);
      while (res===prv && i++<71); //so give it more tries
      sl = await (await page.waitForSelector(slSel)).evaluate( e => e.textContent);
      stdout.clearLine();
      console.log(('In '+Lang.get(e)+':').padEnd(19) + (F? (F=0,'('+sl+' - source)'): '')+'\n'+res)
     }
     prv = res; ctl=e
    } catch (e){}
   } else {
    if (!rsp)
     rsp = await page.goto('https://translate.google.com/?sl=auto&tl=en&text='+inp+'&op=translate');
    else if (rsp.status() >= 200) {
     let txarea
     try {
      txarea = await page.waitForSelector( inpSel+'+div', {visible:true,timeout:599});
     } catch (e) { 
      txarea = await page.waitForSelector( inpSel, {visible:true,timeout:599})
     }
     await txarea.evaluate(e => e.value='');
     await txarea.type(inp)
    }
    do
     res = await (await page.waitForSelector( reSel,{visible:true})).evaluate( e=>e.textContent);
    while (res===prv && i++<71);
    sl = await (await page.waitForSelector(slSel)).evaluate( e => e.textContent);
    stdout.clearLine();
    console.log(('* In '+Lang.get(ctl)+':').padEnd(19) + '('+sl+' - source)\n'+res);
    prv = res
   }
/*
   if (lnum > 1) {
    let mlRes = [], i=0;
    do {
     try {
      mlResE = await page.waitForSelector(pReSel+'> span:nth-child('+ ++i+') > span', {visible:true,polling:330});
      if (str = await mlResE.evaluate( e => e.textContent)) mlRes.push('\n'+str);
     } catch (e) { continue }
     console.log('mlRes='+mlRes);

    } while (i < lnum)
   }
*/
   await console.log("\t\t* Put another and hit 'Enter' twice to end it *");
  } while(true);
  await chrom.close();
}

let
len = process.argv.length,
cl = process.argv.slice(2).join(' '),
tl;
if (t = cl.match(/^(.+?)\s+=((?:,?[a-z]{2})+)\s*$/)) {
 cl = t[1];
 tl = t[2]
}
(async ()=>{
 await gtranslate( cl, tl); //.then( r => console.log(r));
 process.exit()
})()
