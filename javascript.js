
function csokkent(aktual){
    if (document.getElementById(`number${aktual}`).value>0){
    document.getElementById(`number${aktual}`).value--
    }   
}
function novel(aktual){
    if (document.getElementById(`number${aktual}`).value<10){
    document.getElementById(`number${aktual}`).value++
    }
}

function betesz(){
   alert(`Hozzáadtuk a kosárhoz :)`)
    let hazaic=document.getElementById(`number1`).value;
    let kapusc=document.getElementById(`number2`).value;
    let kulacsc=document.getElementById(`number3`).value;
    let sapkac=document.getElementById(`number4`).value;
    let osszeg=hazaic*20000+kapusc*25000+kulacsc*4000+sapkac*10000;
    document.getElementById(`tartalom`).innerText=`Hazai mez: ${hazaic} db\n\nKapus mez: ${kapusc} db\n\nKulacs: ${kulacsc} db\n\nSapka: ${sapkac} db\n\nTeljes összeg: ${osszeg} Ft`
}

const gyorsasag=150; 
const c=1; 
function ny() { 
    if (document.getElementById(`nyjid`).value==` Nyereményjáték!!!`){
        setTimeout(`ny()`, 1000)
        const nyj = document.getElementById(`nyjid`).value;
        document.getElementById(`nyjid`).value=nyj.substring(c)+nyj.substring(0,c);
    }
    else{
        setTimeout(`ny()`,gyorsasag);
        const nyj = document.getElementById(`nyjid`).value;
        document.getElementById(`nyjid`).value=nyj.substring(c)+nyj.substring(0,c);
    }
    
    
}

function atvisz(){
    window.location.href=`nyeremenyjatek.html`
}

function visszafooldal(){
    window.location.href=`index.html`
}

function visszashop(){
    window.location.href=`shop.html`
}

function kovetkezo(aktual){
    document.getElementById(`kerdes${aktual}`).classList.remove(`aktiv`);
    document.getElementById(`kerdes${aktual+1}`).classList.add(`aktiv`);
    document.getElementById(`nyjatekszoveg`).classList.remove(`aktiv`)
}

function ertek(aktual){
    document.getElementById('helyez').innerText=aktual;
}

function elkuld(){
    pontok=0
    let kerdes1=document.getElementById(`kerd1`).value
    let kerdes2=document.getElementById(`kerd2`).value
    let kerdes3=document.getElementById(`kerd3`).value
    let kerdes4=document.getElementById(`kerd4`).selectedIndex
    let kerdes5=document.getElementById(`bezs`).checked
    let kerdes6a=document.getElementById(`sap`).checked
    let kerdes6b=document.getElementById(`ku`).checked
    let kerdes6c=document.getElementById(`kab`).checked
    let kerdes6d=document.getElementById(`sal`).checked
    let kerdes7=document.getElementById(`kerd7`).value
    let kerdes8=document.getElementById(`kerd8`).value

    if (kerdes1.toLowerCase()==`hegyek és völgyek`){
        pontok++
    }

    if (kerdes2==1){
        pontok++
    }

    if (kerdes3==`2024-11-08`){
        pontok++
    }
    
    if (kerdes4==3){
        pontok++
    }
    
    if (kerdes5==true){
        pontok++
    }
    
    if (kerdes6a==1 && kerdes6b==1 && kerdes6c==0 && kerdes6d==0){
        pontok++
    }
    
    if (kerdes7==7){
        pontok++
    }
    
    if (kerdes8.toLowerCase()==`adidas`){
        pontok++
    }
    
    if (pontok>6){
        window.location.href=`szerencsekerek.html`
    }
    else{
        document.getElementById(`kitoltes`).innerText=`Sajnáljuk, nem nyert, jöjjön vissza a jövőhéten egy másik quiz-re`
    }
}

function porget(){
    td1n()
    setTimeout(`td2n()`,500)
    setTimeout(`td3n()`,1000)
    setTimeout(`td4n()`,1500)
    setTimeout(`ujra()`,1500)
}

function ujra(){
    let a=Math.random()
    if (a<0.9){
        setTimeout(`td1n()`,500)
        document.getElementById(`td1`).classList.remove(`nyert`)
        document.getElementById(`td2`).classList.add(`nyert`)
        let b=Math.random()
        if (b<0.9){
            setTimeout(`td2n()`,1000)
            document.getElementById(`td2`).classList.remove(`nyert`)
            document.getElementById(`td3`).classList.add(`nyert`)
            let c=Math.random()
            if (c<0.9){
                setTimeout(`td3n()`,1500)
                document.getElementById(`td3`).classList.remove(`nyert`)
                document.getElementById(`td4`).classList.add(`nyert`)
                let d=Math.random()
                if (d<0.9){
                    setTimeout(`td4n()`,2000)
                    setTimeout(`ujra()`,2000)
                    document.getElementById(`td4`).classList.remove(`nyert`)
                    document.getElementById(`td1`).classList.add(`nyert`)
                }
                else{
                    setTimeout(`td4nteljesen()`,2000)
                    setTimeout(`nyert()`,2250)
                }
            }
            else{
                setTimeout(`td3nteljesen()`,1500)
                setTimeout(`nyert()`,1750)
            }
        }
        else{
            setTimeout(`td2nteljesen()`,1000)
            setTimeout(`nyert()`,1250)
        }
    }
    else{ 
        setTimeout(`td1nteljesen()`,500)
        setTimeout(`nyert()`,750)
    }
    
}
function nyert(){
    if (document.getElementById(`td1`).className==`nyert`){
        document.getElementById(`eredm`).innerText=`GRATULÁLUNK, NYERT!!!`
        document.getElementById(`eredm`).style.color=`green`
    }
    else{
        document.getElementById(`eredm`).innerText=`Sajnáljuk, nem nyert :(`
        document.getElementById(`eredm`).style.color=`red`
    }
}
function td1nteljesen(){
    let td1=document.getElementById(`td1`)
    td1.style.backgroundColor="#F3A620"
}
function td2nteljesen(){
    let td2=document.getElementById(`td2`)
    td2.style.backgroundColor="#F3A620"
}
function td3nteljesen(){
    let td3=document.getElementById(`td3`)
    td3.style.backgroundColor="#F3A620"
}
function td4nteljesen(){
    let td4=document.getElementById(`td4`)
    td4.style.backgroundColor="#F3A620"
}
function td1n(){
    let td1=document.getElementById(`td1`)
    td1.style.backgroundColor="#F3A620"
    setTimeout(`td1vissza()`,500)
}
function td1vissza(){
    let td1=document.getElementById(`td1`)
    td1.style.backgroundColor="#d9ccab"
}

function td2n(){
    let td2=document.getElementById(`td2`)
    td2.style.backgroundColor="#F3A620"
    setTimeout(`td2vissza()`,500)
}
function td2vissza(){
    let td2=document.getElementById(`td2`)
    td2.style.backgroundColor="#d9ccab"
}

function td3n(){
    let td3=document.getElementById(`td3`)
    td3.style.backgroundColor="#F3A620"
    setTimeout(`td3vissza()`,500)
}
function td3vissza(){
    let td3=document.getElementById(`td3`)
    td3.style.backgroundColor="#d9ccab"
}

function td4n(){
    let td4=document.getElementById(`td4`)
    td4.style.backgroundColor="#F3A620"
    setTimeout(`td4vissza()`,500)
}
function td4vissza(){
    let td4=document.getElementById(`td4`)
    td4.style.backgroundColor="#d9ccab"
}

function season(){
    let ev=document.getElementById(`szezon`).selectedIndex
    if (ev==1){
        document.getElementById(`tabla1`).classList.remove(`aktiv`)
        document.getElementById(`tabla2`).classList.add(`aktiv`)
        document.getElementById(`table1`).classList.remove(`aktiv`)
        document.getElementById(`table2`).classList.add(`aktiv`)
        document.getElementById(`gollovo1`).classList.remove(`aktiv`)
        document.getElementById(`gollovo2`).classList.add(`aktiv`)
    }
    else{
        document.getElementById(`tabla2`).classList.remove(`aktiv`)
        document.getElementById(`tabla1`).classList.add(`aktiv`)
        document.getElementById(`table2`).classList.remove(`aktiv`)
        document.getElementById(`table1`).classList.add(`aktiv`)
        document.getElementById(`gollovo2`).classList.remove(`aktiv`)
        document.getElementById(`gollovo1`).classList.add(`aktiv`)
    }

}

function kovi(){
    document.getElementById(`eredmeny1`).classList.remove(`aktiv`)
    document.getElementById(`eredmeny2`).classList.add(`aktiv`)
}

function elozo(){
    document.getElementById(`eredmeny1`).classList.add(`aktiv`)
    document.getElementById(`eredmeny2`).classList.remove(`aktiv`)
}