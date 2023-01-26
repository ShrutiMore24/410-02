

let output=document.getElementById('output');
async function Search(){
    let input=document.getElementById('input');
    if(input.value==""){
        output.innerHTML=`<h3 style="font-size: 2rem;">Please enter word</h3>`
    }
    else{
        output.innerHTML="";
        const api=await fetch(`https://www.dictionaryapi.com/api/v3/references/collegiate/json/${input.value}?key=0386bca9-7411-4e24-b36e-18f10f344072`)
        const data=await api.json()
        console.log(data[0].shortdef[0]);
        // const result=data[0].hwi.prs[0].sound;
        output.innerHTML=`
        <div class="result">
        <p>${data[0].shortdef[0]}</p>
        <audio controls>
                <source src="horse.ogg" type="audio/ogg">
               
               
              </audio>
        </div>
        `
        //const a=await fetch(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${(data[0].hwi.prs[0].sound.audio)}/${data[0].hwi.prs[0].sound.audio}.mp3`)
        // const audio=await a.json();
        // console.log(a);
        // return hello(result);
    }
}
// async function hello(result){
//     const a=await fetch(`https://media.merriam-webster.com/audio/prons/en/us/mp3/${(result)}/${result}.mp3`)

//     console.log(a);
//     const sound=await a.json();
//     console.log(sound);
// }
