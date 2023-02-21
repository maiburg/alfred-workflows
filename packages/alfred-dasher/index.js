import alfy from 'alfy';
import dashify from 'dashify';

(() => {
    const text = alfy.input;
    const textReplaced = text
      .replace(/ä/g, 'ae')
      .replace(/ö/g, 'oe')
      .replace(/ü/g, 'ue')
      .replace(/Ä/g, 'Ae')
      .replace(/Ö/g, 'Oe')
      .replace(/Ü/g, 'Ue')
      .replace(/ß/g, 'ss')
      .replace(/[ !"#$%&'()*+,\-.:;<=>?@[\\\]^_`{|}~„“]/g, '-');
    const dashed = dashify(textReplaced, { condense: true });

    alfy.output([
        {
            title: dashed,
            subtitle: text + ' => ' + dashed,
            arg: dashed,
            icon: { type: 'fileicon', path: '~/Desktop' }
        }
    ]);
})();
