function escape(str){
   return str.replace(/&/g,'&amp;')
        .replace(/</g,'&lt;')
        .replace(/>/g,'&gt;')
        .replace(/'/g,'&apos;')
        .replace(/"/g,'&quot;')
}

function html(pieces,...substitutions){
    var result = pieces[0]
    for(let i=0;i<substitutions.length;i++){
        result = result + escape(substitutions[i]) + pieces[i+1];
    }
    return result;
}

//console.log(html`<b>${process.argv[2]} says</b>: "${process.argv[3]}"`)

module.exports = html;