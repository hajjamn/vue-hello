# Introduction
VUE è un framework JavaScript le cui due funzionalità principali sono: **l'estensione dell'HTML standard** con una sintassi che gli permette di "leggere" il JavaScrpit e la **reattività** ai cambiamenti del JavaScript dopo che la pagina è già stata caricata.
Come framework VUE è molto versatile e facilmente adattabile qualsiasi sia il tipo di progetto nel quale si adopera, sempre rimanendo nel contento del front-end.
VUE è un framework open source, che significa che chiunque può contribuire al progetto e che questo resterà gratuito e accessibile a tutti in tutte le sue iterazioni future.
Per funzionare VUE utilizza dei componenti chiamati "single-file components" che contengono logica, contenuti e stili in un solo file.
Gli stili in cui sono scritti questi componenti sono o come Options API o come Composition API (Che non vedremo nel corso).
In particolare gli Options API utilizzano un oggetto di opzioni come *data*, *methods* e *mounted*.

## Template Syntax

VUE usa una sintassi che permette di collegare elementi del DOM a dei dati presenti nel JavaScript. Dietro le quinte VUE utilizza codice JavaScript che invece noi possiamo sintetizzare scrivendo degli attributi propri del framework nell'HTML.
Il primo metodo per collegare gli elementi si ottiene con l'utilizzo della sintassi "baffetto" che usa due parentesi graffe : {{ pippo }} che in questo caso sostituisce il baffetto con il valore associato alla proprietà **pippo** dell'oggetto corrispondente. In realtà la documentazione si riferisce ad istanze, ma quanto ho capito io le istanze sarebbero solo dei singoli "elementi" o "oggetti" di una classe di oggetti, quindi sinceramente non ho capito bene perché le chiami così visto che di classi non mi pare di averne viste in VUE. Boh
Detto questo, le doppie graffe interpretano il testo all'interno come testo e non come vero e proprio HTML. A questo si può ovviare utilizzando la direttiva v-html.
v-html è il primo di molti attributi che VUE inserisce e che, come detto prima, si possono inserire nell'HTML e interagiscono con JavaScript. Potremmo parlare di tutte le altre ma ho già abbondantemente superato le 100 parole quindi non sono contrattualmente obbligato a farlo.

![Get Saul Goodmaned](./3d-saul-saul-goodman.gif)