import { strictEqual } from 'assert';
import { bibtex, bibtexTidy, test } from './utils';

const input = bibtex`
% Entries
@ARTICLE{Cesar2013,
  author = {{A},
            B. and {C},
            D.},
  title = {An amazing title},
  volume="n.s.~2",
}`;

const output = bibtex`
% Entries
@article{Cesar2013,
  author        = {{A}, B. and {C}, D.},
  title         = {An amazing title},
  volume        = "n.s.~2"
}
`;

test('multiline fields', async () => {
	const tidied = await bibtexTidy(input); // #86, #177 (multiline fields), #198 (ACM bibtex)
	strictEqual(tidied.bibtex, output);
});
