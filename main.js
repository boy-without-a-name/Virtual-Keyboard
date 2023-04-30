const DigitRowEn = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShift =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowEnCaps = ["`", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowEnShiftCaps =["~","!","@","#","$","%","^","&","*","(",")","_","+","Backspace"]
const DigitRowRu = ["ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShift =["Ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]
const DigitRowRuCaps = ["Ё", 1,2,3,4,5,6,7,8,9,0,"-","=","Backspace"]
const DigitRowRuShiftCaps =["ё","!",'"',"№",";","%",":","?","*","(",")","_","+","Backspace"]

const FirstRowEn = ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\'','Del']
const FirstRowEnShift =['Tab','Q','E','R','T','Y','U','I','O','P','{','}','|','Del']
const FirstRowEnCaps =['Tab','Q','E','R','T','Y','U','I','O','P','[',']','\'','Del']
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

const ThirdRowEn = ['Shift','z','x','c','v','b','n','m',',','.','/','Shift']
const ThirdRowEnShift = ['Shift','Z','X','C','V','B','N','M','<','>','/','Shift']
const ThirdRowCaps = ['Shift','Z','X','C','V','B','N','M',',','.','/','Shift']
const ThirdRowEnShiftCaps =['Shift','z','x','c','v','b','n','m','<','>','/','Shift']
const ThirdRowRu = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'/','Shift']
const ThirdRowRuShift = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",'/','Shift']
const ThirdRowRuShiftCaps = ['Shift',"я","ч","с","м","и","т","ь","б","ю",'/','Shift']
const ThirdRowRuCaps = ['Shift',"Я","Ч","С","М","И","Т","Ь","Б","Ю",'/','Shift']

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

const textarea = createNode('textarea','boby--textarea', 'textarea')
wrapperDiv.append(textarea);

const keyabord = createNode('div', 'body--keyboard', 'keyboard')
wrapperDiv.append(keyabord)

const description= createNode('p','description')
description.innerHTML='Клавиатура создана в операционной системе Windows';
wrapperDiv.append(description)

const lang =createNode('p','language');
lang.innerHTML='Для переключения языка комбинация: левыe ctrl + alt'
wrapperDiv.append(lang)



