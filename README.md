nodejs-greek-whitepages
=======================

Get contact information from greek whitepages service (OTE) using Node.JS.

**Dependencies:** 

* [request](https://www.npmjs.org/package/request)
* [cheerio](https://www.npmjs.org/package/cheerio)

**Usage:**

```bash
sudo npm install -g
chmod u+x ote
```

```bash
$ ./ote GOODYS
NAME: GOODYS
TELEPHONE: 2310912163
ADDRESS: ΛΑΜΠΡΑΚΗ ΓΡΗΓ. 144 Θεσσαλονίκη [Δήμος] Θεσσαλονίκη 54351
```

```bash
$ ./ote 2310912163
NAME: GOODYS
TELEPHONE: 2310912163
ADDRESS: ΛΑΜΠΡΑΚΗ ΓΡΗΓ. 144 Θεσσαλονίκη [Δήμος] Θεσσαλονίκη 54351
```
or alternatively:

```bash
$ sudo npm install -g request
$ sudo npm install -g cheerio
$ node ote.js <number or name> 
```
