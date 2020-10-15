import { bibtex, test, checkSame } from './utils';

const input = bibtex`
@ARTICLE {feinberg1983technique,
    Number={1},
    TITLE={A technique for radiolabeling DNA restriction endonuclease fragments to high specific activity},
  authOr="Feinberg, Andrew P and Vogelstein, Bert",
    journal    = {Analytical biochemistry},
    volume = 132,
    pages={6-13},
    year={1983},
    month={aug},
    publisher={Elsevier},}`;

const output = bibtex`
@ARTICLE{feinberg1983technique,
  Number        = {1},
  TITLE         = {A technique for radiolabeling DNA restriction endonuclease fragments to high specific activity},
  authOr        = "Feinberg, Andrew P and Vogelstein, Bert",
  journal       = {Analytical biochemistry},
  volume        = 132,
  pages         = {6--13},
  year          = {1983},
  month         = {aug},
  publisher     = {Elsevier}
}
`;

test('keep original casing', (t, tidy) => {
	const tidied = tidy(input, { lowercase: false });
	checkSame(t, tidied.bibtex, output);
});
