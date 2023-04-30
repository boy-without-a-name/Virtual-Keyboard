const DigitRowEn = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShift =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowEnCaps = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShiftCaps =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowRu = ["ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShift =["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]
const DigitRowRuCaps = ["Ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShiftCaps =["ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]

const FirstRowEn = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\'','Del']
const FirstRowEnShift =['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del']
const FirstRowEnCaps =['Tab','Q','W','E','R','T','Y','U','I','O','P','[',']','\'','Del']
const FirstRowEnShiftCaps = ['Tab','q','w','e','r','t','y','u','i','o','p','{','}','|','Del']
const FirstRowRu = ['Tab',"й","ц","у","к","е","н","г","ш","щ","з","х","ъ","\'"]
const FirstRowRuShift = ['Tab',"Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","/"]
const FirstRowRuCaps = ['Tab',"Й","Ц","У","К","Е","Н","Г","Ш","Щ","З","Х","Ъ","\'"]
const FirstRowRuShiftCaps = ['Tab',"й","ц","у","к","е","н","г","ш","щ","з","х","ъ","/"]

const SecondRowEn = ['CapsLock', 'a','s','d','f','g','h','j','k','l',';',"'",'Enter']
const SecondRowEnShift = ['CapsLock', 'A','S','D','F','G','H','J','K','L',':','"','Enter']
const SecondRowEnCaps = ['CapsLock', 'A','S','D','F','G','H','J','K','L',';',"'",'Enter']
const SecondRowEnShiftCaps = ['CapsLock', 'a','s','d','f','g','h','j','k','l',':','"','Enter']
const SecondRowRu = ['CapsLock',"ф","ы","в","а","п","р","о","л","д","ж","э",'Enter']
const SecondRowRuShift = ['CapsLock',"Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э",'Enter']
const SecondRowRuCaps = ['CapsLock',"Ф","Ы","В","А","П","Р","О","Л","Д","Ж","Э",'Enter']
const SecondRowRuShiftCaps =['CapsLock',"ф","ы","в","а","п","р","о","л","д","ж","э",'Enter']

const ThirdRowEn = ['Shift','z','x','c','v','b','n','m',',','.','/','','Shift']
const ThirdRowEnShift = ['Shift','Z','X','C','V','B','N','M','<','>','/','','Shift']
const ThirdRowCaps = ['Shift','Z','X','C','V','B','N','M',',','.','/','','Shift']
const ThirdRowEnShiftCaps =['Shift','z','x','c','v','b','n','m','<','>','/','','Shift']
const ThirdRowRu = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'/','Shift']
const ThirdRowRuShift = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",'/','Shift']
const ThirdRowRuShiftCaps = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'/','Shift']
const ThirdRowRuCaps = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",'/','Shift']
const LastRow =['Ctrl','Win','Alt','','Alt','','','','Ctrl']
const Ru=[DigitRowRu,DigitRowRuShift,DigitRowRuCaps,DigitRowRuShiftCaps,FirstRowRu,FirstRowRuShift,FirstRowRuCaps, FirstRowRuShiftCaps,
    SecondRowRu,SecondRowRuShift,SecondRowRuCaps,SecondRowRuShiftCaps,ThirdRowRu,ThirdRowRuShift,ThirdRowRuCaps,ThirdRowRuShiftCaps, LastRow, LastRow, LastRow, LastRow]

const Eng=[DigitRowEn, DigitRowEnShift,DigitRowEnCaps,DigitRowEnShiftCaps,FirstRowEn,FirstRowEnShift,FirstRowEnCaps,FirstRowEnShiftCaps,
    SecondRowEn,SecondRowEnShift,SecondRowEnCaps, SecondRowEnShiftCaps,ThirdRowEn,ThirdRowEnShift,ThirdRowCaps,ThirdRowEnShiftCaps, LastRow, LastRow, LastRow, LastRow]

function createNode(nodeType,...classNames){
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
lang.innerHTML='Для переключения языка комбинация: левыe ctrl + alt'
wrapperDiv.append(lang)

const DigitRowKey =['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'];
const FirstRowKey = ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash','Delete']
const SecondRowKey = ['CapsLock', 'KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter']
const ThirdRowKey = ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight']
const LastRowKey = ['ControlLeft','MetaLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight']

const keys=document.querySelector('.keyboard')


let fillValues = function(array,number,node){
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
        caseUpRu.innerHTML=`${Eng[count][i]}`;
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
fillValues(DigitRowKey,0,0)
fillValues(FirstRowKey,4,1)
fillValues(SecondRowKey,8,2)
fillValues(ThirdRowKey,12,3)
fillValues(LastRowKey,16,4)