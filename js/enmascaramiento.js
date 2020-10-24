let check1 = document.getElementById("check_play1");
let check2 = document.getElementById("check_play2");
let check3 = document.getElementById("check_play3");
let check4 = document.getElementById("check_play4");
let check5 = document.getElementById("check_play5");
let check6 = document.getElementById("check_play6");
let check7 = document.getElementById("check_play7");
let check8 = document.getElementById("check_play8");
let check9 = document.getElementById("check_play9");
let check10 = document.getElementById("check_play10");
let check11 = document.getElementById("check_play11");
let check12 = document.getElementById("check_play12");
let check13 = document.getElementById("check_play13");
let check14 = document.getElementById("check_play14");
let check15 = document.getElementById("check_play15");
let check16 = document.getElementById("check_play16");
let check17 = document.getElementById("check_play17");
let check18 = document.getElementById("check_play18");
let check19 = document.getElementById("check_play19");
let check20 = document.getElementById("check_play20");
let check21 = document.getElementById("check_play21");
let check22 = document.getElementById("check_play22");
let check23 = document.getElementById("check_play23");
let check24 = document.getElementById("check_play24");
let check25 = document.getElementById("check_play25");
let check26 = document.getElementById("check_play26");
let check27 = document.getElementById("check_play27");
let check28 = document.getElementById("check_play28");
let check29 = document.getElementById("check_play29");
let check30 = document.getElementById("check_play30");
let check31 = document.getElementById("check_play31");
let check32 = document.getElementById("check_play32");
let check33 = document.getElementById("check_play33");
let check34 = document.getElementById("check_play34");
let check35 = document.getElementById("check_play35");
let check36 = document.getElementById("check_play36");
let check37 = document.getElementById("check_play37");
let check38 = document.getElementById("check_play38");
let check39 = document.getElementById("check_play39");
let check40 = document.getElementById("check_play40");
let check41 = document.getElementById("check_play41");
let check42 = document.getElementById("check_play42");
let check43 = document.getElementById("check_play43");
let check44 = document.getElementById("check_play44");
let check45 = document.getElementById("check_play45");
let check46 = document.getElementById("check_play46");

let audio = new Audio();
let playlist = new Array('../sounds/tpa_001.m4a','../sounds/tpa_002.m4a','../sounds/tpa_003.m4a','../sounds/tpa_004.m4a','../sounds/tpa_005.m4a','../sounds/tpa_006.m4a','../sounds/tpa_007.m4a','../sounds/tpa_008.m4a','../sounds/tpa_009.m4a','../sounds/tpa_010.m4a','../sounds/tpa_011.m4a','../sounds/tpa_012.m4a','../sounds/tpa_013.m4a','../sounds/tpa_014.m4a','../sounds/tpa_015.m4a','../sounds/tpa_016.m4a','../sounds/tpa_017.m4a','../sounds/tpa_018m4a','../sounds/tpa_019.m4a','../sounds/tpa_020.m4a','../sounds/tpa_021.m4a','../sounds/tpr_001.m4a','../sounds/tpr_002.m4a','../sounds/tpr_003.m4a','../sounds/tpr_004.m4a','../sounds/tpr_005.m4a','../sounds/tpr_006.m4a','../sounds/tpr_007.m4a','../sounds/tpr_008.m4a','../sounds/tpr_009.m4a','../sounds/tpr_010.m4a','../sounds/tpr_011.m4a','../sounds/tpr_012.m4a','../sounds/tpr_013.m4a','../sounds/tpr_014.m4a','../sounds/tpr_015.m4a','../sounds/tpr_016.m4a','../sounds/tpr_017.m4a','../sounds/tps_001.m4a','../sounds/tps_002.m4a','../sounds/tps_003.m4a','../sounds/tps_004.m4a','../sounds/tps_005.m4a','../sounds/tps_006.m4a','../sounds/tps_007.m4a','../sounds/tps_008.m4a')
let buttonlist = new Array(check1,check2,check3,check4,check5,check6,check7,check8,check9,check10,check11,check12,check13,check14,check15,check16,check17,check18,check19,check20,check21,check22,check23,check24,check25,check26,check27,check28,check29,check30,check31,check32,check33,check34,check35,check36,check37,check38,check39,check40,check41,check42,check43,check44,check45,check46);
check1.onclick = () =>{
    if(check1.checked==true){
        //check2.checked = false
        limpiar_botones(0);
        audio.src = playlist[0];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check2.onclick = () =>{
    if(check2.checked==true){
        //check1.checked = false
        limpiar_botones(1);
        audio.src = playlist[1];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check3.onclick = () =>{
    if(check3.checked==true){
        //check1.checked = false
        limpiar_botones(2);
        audio.src = playlist[2];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check4.onclick = () =>{
    if(check4.checked==true){
        //check1.checked = false
        limpiar_botones(3);
        audio.src = playlist[3];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check5.onclick = () =>{
    if(check5.checked==true){
        //check1.checked = false
        limpiar_botones(4);
        audio.src = playlist[4];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check6.onclick = () =>{
    if(check6.checked==true){
        //check1.checked = false
        limpiar_botones(5);
        audio.src = playlist[5];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check7.onclick = () =>{
    if(check7.checked==true){
        //check1.checked = false
        limpiar_botones(6);
        audio.src = playlist[6];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check8.onclick = () =>{
    if(check8.checked==true){
        //check1.checked = false
        limpiar_botones(7);
        audio.src = playlist[7];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check9.onclick = () =>{
    if(check9.checked==true){
        //check1.checked = false
        limpiar_botones(8);
        audio.src = playlist[8];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check10.onclick = () =>{
    if(check10.checked==true){
        //check1.checked = false
        limpiar_botones(9);
        audio.src = playlist[9];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check11.onclick = () =>{
    if(check11.checked==true){
        //check2.checked = false
        limpiar_botones(10);
        audio.src = playlist[10];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check12.onclick = () =>{
    if(check12.checked==true){
        //check1.checked = false
        limpiar_botones(11);
        audio.src = playlist[11];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check13.onclick = () =>{
    if(check13.checked==true){
        //check1.checked = false
        limpiar_botones(12);
        audio.src = playlist[12];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check14.onclick = () =>{
    if(check14.checked==true){
        //check1.checked = false
        limpiar_botones(13);
        audio.src = playlist[13];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check15.onclick = () =>{
    if(check15.checked==true){
        //check1.checked = false
        limpiar_botones(14);
        audio.src = playlist[14];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check16.onclick = () =>{
    if(check16.checked==true){
        //check1.checked = false
        limpiar_botones(15);
        audio.src = playlist[15];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check17.onclick = () =>{
    if(check17.checked==true){
        //check1.checked = false
        limpiar_botones(16);
        audio.src = playlist[16];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check18.onclick = () =>{
    if(check18.checked==true){
        //check1.checked = false
        limpiar_botones(17);
        audio.src = playlist[17];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check19.onclick = () =>{
    if(check19.checked==true){
        //check1.checked = false
        limpiar_botones(18);
        audio.src = playlist[18];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check20.onclick = () =>{
    if(check20.checked==true){
        //check1.checked = false
        limpiar_botones(19);
        audio.src = playlist[19];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check21.onclick = () =>{
    if(check21.checked==true){
        //check1.checked = false
        limpiar_botones(20);
        audio.src = playlist[20];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check22.onclick = () =>{
    if(check22.checked==true){
        //check1.checked = false
        limpiar_botones(21);
        audio.src = playlist[21];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check23.onclick = () =>{
    if(check23.checked==true){
        //check1.checked = false
        limpiar_botones(22);
        audio.src = playlist[22];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check24.onclick = () =>{
    if(check24.checked==true){
        //check1.checked = false
        limpiar_botones(23);
        audio.src = playlist[23];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check25.onclick = () =>{
    if(check25.checked==true){
        //check1.checked = false
        limpiar_botones(24);
        audio.src = playlist[24];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check26.onclick = () =>{
    if(check26.checked==true){
        //check1.checked = false
        limpiar_botones(25);
        audio.src = playlist[25];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check27.onclick = () =>{
    if(check27.checked==true){
        //check1.checked = false
        limpiar_botones(26);
        audio.src = playlist[26];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check28.onclick = () =>{
    if(check28.checked==true){
        //check1.checked = false
        limpiar_botones(27);
        audio.src = playlist[27];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check29.onclick = () =>{
    if(check29.checked==true){
        //check1.checked = false
        limpiar_botones(28);
        audio.src = playlist[28];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check30.onclick = () =>{
    if(check30.checked==true){
        //check1.checked = false
        limpiar_botones(29);
        audio.src = playlist[29];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check31.onclick = () =>{
    if(check31.checked==true){
        //check1.checked = false
        limpiar_botones(30);
        audio.src = playlist[30];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check32.onclick = () =>{
    if(check32.checked==true){
        //check1.checked = false
        limpiar_botones(31);
        audio.src = playlist[31];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check33.onclick = () =>{
    if(check33.checked==true){
        //check1.checked = false
        limpiar_botones(32);
        audio.src = playlist[32];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check34.onclick = () =>{
    if(check34.checked==true){
        //check1.checked = false
        limpiar_botones(33);
        audio.src = playlist[33];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check35.onclick = () =>{
    if(check35.checked==true){
        //check1.checked = false
        limpiar_botones(34);
        audio.src = playlist[34];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check36.onclick = () =>{
    if(check36.checked==true){
        //check1.checked = false
        limpiar_botones(35);
        audio.src = playlist[35];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check37.onclick = () =>{
    if(check37.checked==true){
        //check1.checked = false
        limpiar_botones(36);
        audio.src = playlist[36];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check38.onclick = () =>{
    if(check38.checked==true){
        //check1.checked = false
        limpiar_botones(37);
        audio.src = playlist[37];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check39.onclick = () =>{
    if(check39.checked==true){
        //check1.checked = false
        limpiar_botones(38);
        audio.src = playlist[38];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check40.onclick = () =>{
    if(check40.checked==true){
        //check1.checked = false
        limpiar_botones(39);
        audio.src = playlist[39];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check41.onclick = () =>{
    if(check41.checked==true){
        //check1.checked = false
        limpiar_botones(40);
        audio.src = playlist[40];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check42.onclick = () =>{
    if(check42.checked==true){
        //check1.checked = false
        limpiar_botones(41);
        audio.src = playlist[41];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check43.onclick = () =>{
    if(check43.checked==true){
        //check1.checked = false
        limpiar_botones(42);
        audio.src = playlist[42];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check44.onclick = () =>{
    if(check44.checked==true){
        //check1.checked = false
        limpiar_botones(43);
        audio.src = playlist[43];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}

check45.onclick = () =>{
    if(check45.checked==true){
        //check1.checked = false
        limpiar_botones(44);
        audio.src = playlist[44];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}
check46.onclick = () =>{
    if(check46.checked==true){
        //check1.checked = false
        limpiar_botones(45);
        audio.src = playlist[45];
        audio.loop = true;
        audio.play();
    }
    else{
        audio.pause();
        audio.currentTime = 0;   
    }
}



let limpiar_botones=(boton)=>{
    for(let i=0;i<buttonlist.length;i++){
        if(i!=boton){
            buttonlist[i].checked = false;
        }
    }
}