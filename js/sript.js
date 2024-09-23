let raw = document.getElementById("text");

function lower(){
    return raw.value = raw.value.toLowerCase();
};

function upper(){
    return raw.value = raw.value.toUpperCase();
};

function fence(r = false){
    let raw1 = raw.value.toLowerCase().split("");
    let temp = 0
    if(!r){
        temp = 1
    };
    result = []
    for(let i = 0; i < raw1.length; i++){
        if(i%2 == temp){
            result.push(raw1[i].toUpperCase())
        }else{
            result.push(raw1[i].toLowerCase())
        };
    }
    return raw.value = result.join("")
};

function capital(pat){
    let raw1 = raw.value.toLowerCase().split(pat);
    for(let i = 0; i < raw1.length; i++){
        let temp = raw1[i].split("");
        temp[0] = temp[0].toUpperCase()
        raw1[i] = temp.join("")
    };
    return raw.value = raw1.join(pat)
};

function copy(){
    raw.select();
    raw.setSelectionRange(0, 99999);
    return navigator.clipboard.writeText(raw.value)
};