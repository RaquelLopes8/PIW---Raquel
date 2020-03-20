import React, { Component } from 'react';

class ListaElementos extends Component {
    state = { 
        produtos: [
            {
                nome: "Vc não vale",
                preco: "R$ 0,00",
            },
            {
                nome: "Ever dade",
                preco: "R$ 50,00",
            }
        ]
    }

    render() { 
        //let eleDiv = [];
        //for( let produto of this.state.produtos){
          //  console.log(produto);
            //eleDiv.push(
              //  (<div>
                //    <h3>{produto.nome}</h3>
                  //  <span>{produto.preco}</span>
                //</div>)
           // );
        //}

        let eleDiv = this.state.produtos.map(
            (produto) =>(

                <div>
                    <h3>{produto.nome}</h3>
                    <span>{produto.preco}</span>
                </div>
            )
        )

        return (  
            <div>
                <div>
                    {eleDiv}
                </div>
            </div>
        );
    }
}
 
export default ListaElementos;