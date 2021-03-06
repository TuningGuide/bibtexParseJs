import test from 'ava';

const bibtexParse = require('../bibtexParse');

const input = `
  @ARTICLE{2012ApJ...744...93B,
     author = {{Battisti}, A.~J. and {Meiring}, J.~D. and {Tripp}, T.~M. and 
    {Prochaska}, J.~X. and {Werk}, J.~K. and {Jenkins}, E.~B. and 
    {Lehner}, N. and {Tumlinson}, J. and {Thom}, C.},
      title = "{The First Observations of Low-redshift Damped Ly{$\alpha$} Systems with the Cosmic Origins Spectrograph: Chemical Abundances and Affiliated Galaxies}",
    journal = {\apj},
  archivePrefix = "arXiv",
     eprint = {1110.4557},
   primaryClass = "astro-ph.CO",
   keywords = {galaxies: abundances, galaxies: ISM, quasars: absorption lines},
       year = 2012,
      month = jan,
     volume = 744,
        eid = {93},
      pages = {93},
        doi = {10.1088/0004-637X/744/2/93},
     adsurl = {http://adsabs.harvard.edu/abs/2012ApJ...744...93B},
    adsnote = {Provided by the SAO/NASA Astrophysics Data System}
  }

  @ARTICLE{2012ApJ...744...93C,
     author = {{Battisti}, A.~J. and {Meiring}, J.~D. and {Tripp}, T.~M. and
          {Prochaska}, J.~X. and {Werk}, J.~K. and {Jenkins}, E.~B. and
          {Lehner}, N. and {Tumlinson}, J. and {Thom}, C.},
      title = "{The First Observations of Low-redshift Damped Ly{$\alpha$} Systems with the Cosmic Origins Spectrograph: Chemical Abundances and Affiliated Galaxies}",
    journal = {\apj},
  archivePrefix = "arXiv",
     eprint = {1110.4557},
   primaryClass = "astro-ph.CO",
   keywords = {galaxies: abundances, galaxies: ISM, quasars: absorption lines},
       year = 2012,
      month = Jan,
     volume = 744,
        eid = {93},
      pages = {93},
        doi = {10.1088/0004-637X/744/2/93},
     adsurl = {http://adsabs.harvard.edu/abs/2012ApJ...744...93B},
    adsnote = {Provided by the SAO/NASA Astrophysics Data System}
  }
`;

const output = [ { citationKey: '2012ApJ...744...93B',
    entryType: 'ARTICLE',
    entryTags:
     { author: '{Battisti}, A.~J. and {Meiring}, J.~D. and {Tripp}, T.~M. and \n    {Prochaska}, J.~X. and {Werk}, J.~K. and {Jenkins}, E.~B. and \n    {Lehner}, N. and {Tumlinson}, J. and {Thom}, C.',
       title: '{The First Observations of Low-redshift Damped Ly{$alpha$} Systems with the Cosmic Origins Spectrograph: Chemical Abundances and Affiliated Galaxies}',
       journal: 'apj',
       archivePrefix: 'arXiv',
       eprint: '1110.4557',
       primaryClass: 'astro-ph.CO',
       keywords: 'galaxies: abundances, galaxies: ISM, quasars: absorption lines',
       year: '2012',
       month: 'jan',
       volume: '744',
       eid: '93',
       pages: '93',
       doi: '10.1088/0004-637X/744/2/93',
       adsurl: 'http://adsabs.harvard.edu/abs/2012ApJ...744...93B',
       adsnote: 'Provided by the SAO/NASA Astrophysics Data System' } },
  { citationKey: '2012ApJ...744...93C',
    entryType: 'ARTICLE',
    entryTags:
     { author: '{Battisti}, A.~J. and {Meiring}, J.~D. and {Tripp}, T.~M. and\n          {Prochaska}, J.~X. and {Werk}, J.~K. and {Jenkins}, E.~B. and\n          {Lehner}, N. and {Tumlinson}, J. and {Thom}, C.',
       title: '{The First Observations of Low-redshift Damped Ly{$alpha$} Systems with the Cosmic Origins Spectrograph: Chemical Abundances and Affiliated Galaxies}',
       journal: 'apj',
       archivePrefix: 'arXiv',
       eprint: '1110.4557',
       primaryClass: 'astro-ph.CO',
       keywords: 'galaxies: abundances, galaxies: ISM, quasars: absorption lines',
       year: '2012',
       month: 'jan',
       volume: '744',
       eid: '93',
       pages: '93',
       doi: '10.1088/0004-637X/744/2/93',
       adsurl: 'http://adsabs.harvard.edu/abs/2012ApJ...744...93B',
       adsnote: 'Provided by the SAO/NASA Astrophysics Data System' } } ]

test('Month should be parsed', t => t.deepEqual(output, bibtexParse.toJSON(input)));
