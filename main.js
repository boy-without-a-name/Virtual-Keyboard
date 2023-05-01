const DigitRowEn = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShift =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowEnCaps = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShiftCaps =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowRu = ["ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShift =["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]
const DigitRowRuCaps = ["Ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShiftCaps =["ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]

const FirstRowEn = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del']
const FirstRowEnShift =['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del']
const FirstRowEnCaps =['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\\','Del']
const FirstRowEnShiftCaps = ['Tab','q','w','e','r','t','y','u','i','o','p','{','}','|','Del']
const FirstRowRu = ['Tab',"й","ц","у","к","е","н","г","ш","щ","з","х","ъ",'\\','Del']
const FirstRowRuShift = ['Tab',"Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ",'\\','Del']
const FirstRowRuCaps = ['Tab',"Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ",'\\','Del']
const FirstRowRuShiftCaps = ['Tab',"й","ц","у","к","е","н","г","ш","щ","з","х","ъ",'\\','Del']

const SecondRowEn = ['CapsLock', 'a','s','d','f','g','h','j','k','l',';',"'",'Enter']
const SecondRowEnShift = ['CapsLock', 'A','S','D','F','G','H','J','K','L',':','"','Enter']
const SecondRowEnCaps = ['CapsLock', 'A','S','D','F','G','H','J','K','L',';',"'",'Enter']
const SecondRowEnShiftCaps = ['CapsLock', 'a','s','d','f','g','h','j','k','l',':','"','Enter']
const SecondRowRu = ['CapsLock',"ф","ы","в","а","п","р","о","л","д","ж","э",'Enter']
const SecondRowRuShift = ['CapsLock',"Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э",'Enter']
const SecondRowRuCaps = ['CapsLock',"Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э",'Enter']
const SecondRowRuShiftCaps =['CapsLock',"ф","ы","в","а","п","р","о","л","д","ж","э",'Enter']

const ThirdRowEn = ['Shift','z','x','c','v','b','n','m',',','.','/','▲','Shift']
const ThirdRowEnShift = ['Shift','Z','X','C','V','B','N','M','<','>','?','▲','Shift']
const ThirdRowCaps = ['Shift','Z','X','C','V','B','N','M',',','.','/','▲','Shift']
const ThirdRowEnShiftCaps =['Shift','z','x','c','v','b','n','m','<','>','?','▲','Shift']
const ThirdRowRu = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'/','▲','Shift']
const ThirdRowRuShift = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",',','▲','Shift']
const ThirdRowRuShiftCaps = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'.','▲','Shift']
const ThirdRowRuCaps = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",',','▲','Shift']
const LastRow =['Ctrl','Win','Alt','','Alt','◄','▼','►','Ctrl']
const Ru=[DigitRowRu,DigitRowRuShift,DigitRowRuCaps,DigitRowRuShiftCaps,FirstRowRu,FirstRowRuShift,FirstRowRuCaps, FirstRowRuShiftCaps,
    SecondRowRu,SecondRowRuShift,SecondRowRuCaps,SecondRowRuShiftCaps,ThirdRowRu,ThirdRowRuShift,ThirdRowRuCaps,ThirdRowRuShiftCaps, LastRow, LastRow, LastRow, LastRow]

const Eng=[DigitRowEn, DigitRowEnShift,DigitRowEnCaps,DigitRowEnShiftCaps,FirstRowEn,FirstRowEnShift,FirstRowEnCaps,FirstRowEnShiftCaps,
    SecondRowEn,SecondRowEnShift,SecondRowEnCaps, SecondRowEnShiftCaps,ThirdRowEn,ThirdRowEnShift,ThirdRowCaps,ThirdRowEnShiftCaps, LastRow, LastRow, LastRow, LastRow]

createNode = (nodeType,...classNames)=>{
    let elem = document.createElement(nodeType);
    elem.className = classNames.join(' ')
    return elem
} 
const wrapper = createNode('div','centralizer')
document.body.append(wrapper);

const wrapperDiv = document.querySelector('.centralizer');

const header = createNode('p','title')
header.innerHTML='RSS Виртуальная Клавиатура';
wrapperDiv.append(header);

const textarea = createNode('textarea', 'textarea')
wrapperDiv.append(textarea);

const keyabord = createNode('div', 'keyboard')
wrapperDiv.append(keyabord)

const description= createNode('p','description')
description.innerHTML='Клавиатура создана в операционной системе Windows';
wrapperDiv.append(description)

const lang =createNode('p','language');
lang.innerHTML='Для переключения языка комбинация: ctrl + alt'
wrapperDiv.append(lang)

const DigitRowKey =['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'];
const FirstRowKey = ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete']
const SecondRowKey = ['CapsLock', 'KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter']
const ThirdRowKey = ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight']
const LastRowKey = ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']

const keys=document.querySelector('.keyboard')


CreateValues =(array,number,node)=> {
    let rows=createNode('div','row');
    keys.append(rows)
    const row=document.querySelectorAll('.row')[node]
    for(let i=0;i<array.length;i++){
        let nodes=createNode('div', 'key',`${array[i]}`)
        row.append(nodes);
        let button = document.querySelector('.'+`${array[i]}`) 
        let rus = createNode('span','rus','hidden')
        button.append(rus)
        let en = createNode('span','en')
        button.append(en)
        let count=number;
        let caseDownRu =createNode('span','caseDown','hidden')
        caseDownRu.innerHTML=`${Ru[count][i]}`;
        rus.append(caseDownRu)
        count++
        let caseUpRu =createNode('span','caseUp','hidden')
        caseUpRu.innerHTML=`${Ru[count][i]}`;
        rus.append(caseUpRu)
        count++
        let capsRu =createNode('span','caps','hidden')
        capsRu.innerHTML=`${Ru[count][i]}`;
        rus.append(capsRu)
        count++
        let capsShiftRu =createNode('span','shift-caps','hidden')
        capsShiftRu.innerHTML=`${Ru[count][i]}`;
        rus.append(capsShiftRu)
        count=number;
        let caseDownEn =createNode('span','caseDown')
        caseDownEn.innerHTML=`${Eng[count][i]}`;
        en.append(caseDownEn)
        count++
        let caseUpEn =createNode('span','caseUp','hidden')
        caseUpEn.innerHTML=`${Eng[count][i]}`;
        en.append(caseUpEn)
        count++
        let capsEn =createNode('span','caps','hidden')
        capsEn.innerHTML=`${Eng[count][i]}`;
        en.append(capsEn)
        count++
        let capsShiftEn =createNode('span','shift-caps','hidden')
        capsShiftEn.innerHTML=`${Eng[count][i]}`;
        en.append(capsShiftEn)
    }   
} 
CreateValuesRu =(array,number,node)=> {
    let rows=createNode('div','row');
    keys.append(rows)
    const row=document.querySelectorAll('.row')[node]
    for(let i=0;i<array.length;i++){
        let nodes=createNode('div', 'key',`${array[i]}`)
        row.append(nodes);
        let button = document.querySelector('.'+`${array[i]}`) 
        let rus = createNode('span','rus')
        button.append(rus)
        let en = createNode('span','en','hidden')
        button.append(en)
        let count=number;
        let caseDownRu =createNode('span','caseDown')
        caseDownRu.innerHTML=`${Ru[count][i]}`;
        rus.append(caseDownRu)
        count++
        let caseUpRu =createNode('span','caseUp','hidden')
        caseUpRu.innerHTML=`${Ru[count][i]}`;
        rus.append(caseUpRu)
        count++
        let capsRu =createNode('span','caps','hidden')
        capsRu.innerHTML=`${Ru[count][i]}`;
        rus.append(capsRu)
        count++
        let capsShiftRu =createNode('span','shift-caps','hidden')
        capsShiftRu.innerHTML=`${Ru[count][i]}`;
        rus.append(capsShiftRu)
        count=number;
        let caseDownEn =createNode('span','caseDown','hidden')
        caseDownEn.innerHTML=`${Eng[count][i]}`;
        en.append(caseDownEn)
        count++
        let caseUpEn =createNode('span','caseUp','hidden')
        caseUpEn.innerHTML=`${Eng[count][i]}`;
        en.append(caseUpEn)
        count++
        let capsEn =createNode('span','caps','hidden')
        capsEn.innerHTML=`${Eng[count][i]}`;
        en.append(capsEn)
        count++
        let capsShiftEn =createNode('span','shift-caps','hidden')
        capsShiftEn.innerHTML=`${Eng[count][i]}`;
        en.append(capsShiftEn)
    }   
} 
createKeybords=()=>{
    if(localStorage.getItem('lang')=='rus'){
        CreateValuesRu(DigitRowKey,0,0)
        CreateValuesRu(FirstRowKey,4,1)
        CreateValuesRu(SecondRowKey,8,2)
        CreateValuesRu(ThirdRowKey,12,3)
        CreateValuesRu(LastRowKey,16,4)
    } else{
        CreateValues(DigitRowKey,0,0)
        CreateValues(FirstRowKey,4,1)
        CreateValues(SecondRowKey,8,2)
        CreateValues(ThirdRowKey,12,3)
        CreateValues(LastRowKey,16,4)
    }
}
createKeybords()

const inpupTextarea = document.querySelector('.textarea');

getCaretPos=(obj)=> {
    obj.focus();
    if(obj.selectionStart) return obj.selectionStart;
    else if (document.selection) {
         var sel = document.selection.createRange();
         var clone = sel.duplicate();
         sel.collapse(true);
         clone.moveToElementText(obj);
         clone.setEndPoint('EndToEnd', sel);
         return clone.text.length;
    }
    return 0;
}
localStorage.setItem('caps', 'false')

chekShift=(val1,val2,val3,val4)=>{
{
        if(localStorage.getItem('caps') == 'false' ){
            let i=document.querySelectorAll('.'+localStorage.getItem('lang'))

            for(let y=0;y<i.length;y++){
                let children=i[y].children[val1]
                let childrenCaseUp=i[y].children[val2]
                children.classList.toggle('hidden');
                childrenCaseUp.classList.remove('hidden');
            }

        } else{
            let i=document.querySelectorAll('.'+localStorage.getItem('lang'))
 
            for(let y=0;y<i.length;y++){
                let children=i[y].children[val3]
                let childrenCaseUp=i[y].children[val4]
                children.classList.toggle('hidden');
                childrenCaseUp.classList.remove('hidden');
            }
        }
}
}
chekCaps=(val1, val2)=> {
        if(localStorage.getItem('caps') == 'false' ){
            let i=document.querySelectorAll('.'+localStorage.getItem('lang'))
            localStorage.setItem('caps', 'true')
            for(let y=0;y<i.length;y++){
                let children=i[y].children[val2]
                let childrenCaseUp=i[y].children[val1]
                children.classList.toggle('hidden');
                childrenCaseUp.classList.remove('hidden');
            }
    } else{
        let i=document.querySelectorAll('.'+localStorage.getItem('lang'))
        localStorage.setItem('caps', 'false')
            for(let y=0;y<i.length;y++){
                let children=i[y].children[val1]
                let childrenCaseUp=i[y].children[val2]
                children.classList.toggle('hidden');
                childrenCaseUp.classList.remove('hidden');
    }
}}
possition=(v)=>{
    let pos = getCaretPos(inpupTextarea);
    if(pos == inpupTextarea.value.length){
        inpupTextarea.value +=v  
    } else if(pos!=1){
        inpupTextarea.value =(inpupTextarea.value.slice(0,pos) + v + inpupTextarea.value.slice(pos,inpupTextarea.value.length))
    } else(inpupTextarea.value=v+inpupTextarea.value)
}


CapsClick=()=>{keys.addEventListener('click',(event)=>{
    if(event.target.closest('.CapsLock')){
  
}
})}
keys.addEventListener('mousedown',(event)=>{
    parent = event.target.closest('.key')
    if(event.target.closest('.ShiftLeft')||event.target.closest('.ShiftRight')){
       chekShift(0,1,2,3)
       parent.classList.toggle('active')
    }
    else if(event.target.closest('.key')){
        parent.classList.toggle('active')
    }
})
keys.addEventListener('mouseup',(event)=>{
    parent = event.target.closest('.key')
        if(event.target.closest('.Tab')){
            possition('    ')
            parent.classList.remove('active')
        
        } else if(event.target.closest('.Enter')){
            possition('\n');
            parent.classList.remove('active')
        } else if(event.target.closest('.Space')){
            possition(' ');
            parent.classList.remove('active')
        } else if(event.target.closest('.Backspace')){
           let pos = getCaretPos(inpupTextarea)
                inpupTextarea.value=(inpupTextarea.value.slice(0,pos-1) + inpupTextarea.value.slice(pos,inpupTextarea.value.length));
                parent.classList.remove('active');
        }else if(event.target.closest('.Delete')){
            let pos = getCaretPos(inpupTextarea)
            parent.classList.remove('active');
            if(pos !=inpupTextarea.value.length){
                inpupTextarea.value=(inpupTextarea.value.slice(0,pos) + inpupTextarea.value.slice(pos+1,inpupTextarea.value.length))
            } 
        } else if(event.target.closest('.ShiftLeft')||event.target.closest('.ShiftRight')){
            chekShift(1,0,3,2)
            parent.classList.remove('active');
        } else if(event.target.closest('.ControlLeft') ||event.target.closest('.MetaLeft')
        ||event.target.closest('.AltLeft')  ||event.target.closest('.AltRight')  ||event.target.closest('.ControlRight')){
            parent.classList.remove('active');
        }else if(event.target.closest('.CapsLock')){ 
            if(localStorage.getItem('caps') == 'true')
            {parent.classList.remove('active')}
            chekCaps(2,0)
        }
        else if(event.target.closest('.key')){
            possition(event.target.innerHTML);
            parent.classList.remove('active');
        }
    }
    )
  
    
    inpupTextarea.addEventListener('keydown',(event)=>{
        if (event.code =='CapsLock'){
            chekCaps(2,0)
  
        }else if (event.code =='ShiftLeft'||event.code =='ShiftRight'){
           chekShift(0,1,2,3)
           let divCurrent=document.querySelector('.'+event.code)
           divCurrent.classList.toggle('active')
        }
        else{let divCurrent=document.querySelector('.'+event.code)
        divCurrent.classList.toggle('active')
        if(event.code =='Tab'){
            event.preventDefault()
            possition('    ')
        }else if(event.code=='ArrowLeft'){
            event.preventDefault()
            possition('◄')
        }else if(event.code=='ArrowDown'){
            event.preventDefault()
            possition('▼')
        } else if(event.code=='ArrowRight'){
            event.preventDefault()
            possition('►')
        }else if(event.code=='ArrowUp'){
            event.preventDefault()
            possition('▲')
        } else if(event.code=='ControlLeft' ||event.code=='.MetaLeft'
        ||event.code=='AltLeft'  || event.code=='AltRight' ||event.code=='ControlRight'){
            event.preventDefault()
            if(event.ctrlKey&&event.altKey){
                console.log(1)
                if(localStorage.getItem('lang')=='en')
                {localStorage.setItem('lang','rus')
                    let En=document.querySelectorAll('.en')
                    let rus=document.querySelectorAll('.rus')
                if (localStorage.getItem('caps')=='false'){
                    for(let i=0; i<En.length;i++){
                        let children= En[i].children[0]
                        let childrenRu= rus[i].children[0]
                        En[i].classList.toggle('hidden')
                        children.classList.toggle('hidden')
                        rus[i].classList.remove('hidden')
                        childrenRu.classList.remove('hidden')
                }
                } else{
                    for(let i=0; i<En.length;i++){
                        let children= En[i].children[2]
                        let childrenRu= rus[i].children[2]
                        En[i].classList.toggle('hidden')
                        children.classList.toggle('hidden')
                        rus[i].classList.remove('hidden')
                        childrenRu.classList.remove('hidden')
                }
            } 
            } else{
                localStorage.setItem('lang','en')
                let En=document.querySelectorAll('.en')
                let rus=document.querySelectorAll('.rus')
                if (localStorage.getItem('caps')=='false'){
                for(let i=0; i<En.length;i++){
                let children= rus[i].children[0]
                let childrenEn= En[i].children[0]
                rus[i].classList.toggle('hidden')
                children.classList.toggle('hidden')
                En[i].classList.remove('hidden')
                childrenEn.classList.remove('hidden')
        }
        } else{
            for(let i=0; i<En.length;i++){
                let children= rus[i].children[2]
                let childrenEn= En[i].children[2]
                rus[i].classList.toggle('hidden')
                children.classList.toggle('hidden')
                En[i].classList.remove('hidden')
                childrenEn.classList.remove('hidden')
            }
        }
        }
    }}}}
    )
    inpupTextarea.addEventListener('keyup',(event)=>{
        if (event.code =='CapsLock'){  
            let divCurrent=document.querySelector('.'+event.code)
            if(localStorage.getItem('caps') == 'true'){
                divCurrent.classList.toggle('active');
            } else{
                divCurrent.classList.remove('active')
           }
        }else if (event.code =='ShiftLeft'||event.code =='ShiftRight'){
            chekShift(1,0,3,2)
            let divCurrent=document.querySelector('.'+event.code)
        divCurrent.classList.remove('active')
         }
        else {let divCurrent=document.querySelector('.'+event.code)
        divCurrent.classList.remove('active')}
         }
    )