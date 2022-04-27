import { TodoListItem } from '../components/TodoListItem'
import './Home.css'
let xBoolean = []
let id = [];

export function Home() {
    
    const itemsArray = [
        { id: 1, text: "Acordar 7 horas da manhã", checked: ""},
        { id: 2, text: "Lavar toda a louça suja que está dentro ou fora da pia", checked: ""},
        { id: 3, text: "Levar os cachorros para passear por 30 min", checked: ""},
        { id: 4, text: "Lavar o carro todo", checked: ""},
    ];

    let Identificacao =  localStorage.getItem("Identificacao");
    let Objeto_Booleano = localStorage.getItem("Objeto_Booleano");

    if (Identificacao!=undefined){
    id = JSON.parse(Identificacao);

    xBoolean = JSON.parse(Objeto_Booleano);
}


    
    
    

    console.log(id.length)
    const teste = () =>{
        for (let index = 0; index<id.length; index++){
            if (id[index]==1){
                itemsArray[0].checked = xBoolean[index]
    
            } else if (id[index]==2){
                itemsArray[1].checked = xBoolean[index]
    
            } else if (id[index]==3){
                itemsArray[2].checked = xBoolean[index]
            } else {
                itemsArray[3].checked = xBoolean[index]
            }
        }
    }

        teste()
    
    
    // itemsArray[id-1].checked = xBoolean;


    console.log(itemsArray)
    
    

    // console.log(itemsArray[id-1].checked)

    // localStorage.setItem("teste", itemsArray[0].checked);
    // sessionStorage.setItem("def", "não, ta tudo uma bela bosta!");


    return (<>
        <div className="container">
            {itemsArray.map(({id, text, checked}) => {
                {/* return <TodoListItem {...obj} /> */}
                return <TodoListItem id={id} text={text} key={id} checked={checked} />
            })}

        </div>
       
        </>
    )
}