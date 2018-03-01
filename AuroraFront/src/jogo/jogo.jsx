import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import './../css/custom.css'
import Logo from './../img/dados-original.png'
import LoadingImg from './../img/loading.gif'

import React from 'react'
import axios from 'axios'

class Jogo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            loading: false, 
            dados: {
                dado1: '',
                dado2: '',
                dado3: '',
                dado4: '',
                dado5: ''
            }, 
            categorias: [], 
            pontuacao: 0, 
            jogar: false, 
            verificar: false
        }
        this.Loading = this.Loading.bind(this)
        this.onClick = this.onClick.bind(this)
        this.GetValues = this.GetValues.bind(this)
        this.GetValue = this.GetValue.bind(this)
        this.onSelected = this.onSelected.bind(this)
        this.JogarNovamente = this.JogarNovamente.bind(this)
    }

    Loading(){
        this.setState(...this.state, {loading: !this.state.loading})
    }

    onClick(dado){
        let dados = this.state.dados
        let valor 
        switch (dado){
            case 'dado1':
                valor = this.GetValue()
                dados.dado1 = valor
                break;
            case 'dado2':
                valor = this.GetValue()
                dados.dado2 = valor
                break;
            case 'dado3':
                valor = this.GetValue()
                dados.dado3 = valor
                break;
            case 'dado4':
                valor = this.GetValue()
                dados.dado4 = valor
                break;
            case 'dado5':
                valor = this.GetValue()
                dados.dado5 = valor
                break;
        }
        if (dados.dado1 != '' && dados.dado2 != '' && dados.dado3 != '' && dados.dado4 != '' && dados.dado5 != ''){
            this.setState(...this.state, {verificar: true})
        }
            
        this.setState(...this.state, {dados : dados})
    }

    GetValue(){
        return Math.floor((Math.random() * 6) + 1)
    }

    GetValues(){
        this.Loading()
        
        let self = this
        let d = this.state.dados
        let params = 'dado1='+d.dado1+'&dado2='+d.dado2+'&dado3='+d.dado3+'&dado4='+d.dado4+'&dado5='+d.dado5
        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }
        axios.get('http://localhost:5000/api/categoria?'+params, config)
        .then(resp => {
            console.log('axios-then')
            self.Loading()
            self.setState(...self.state, {categorias: resp.data})
        })
        .catch(error => {
            console.log(error)
            console.log('axios-catch')
            self.Loading()
        })
    }

    onSelected(valor){
        this.setState(...this.state, {
            jogar: true, 
            categorias: [], 
            verificar: false, 
            pontuacao: (this.state.pontuacao * 1) + (valor * 1)
        })
    }

    JogarNovamente(){
        this.setState(...this.state, {
            jogar: false, 
            categorias: [], 
            verificar: false, 
            dados: {
                dado1: '',
                dado2: '',
                dado3: '',
                dado4: '',
                dado5: ''
            }
        })
    }

    render() {
        let self = this
        let categorias = this.state.categorias
        let categoriaExists = false
        let count = -1
        let objCategorias = categorias.map(function(categoria){
            categoriaExists = true
            count++
            return (
                <div className="row" key={count}>
                    <div className="col-xs-4">
                        <h5>
                            {categoria.Nome}
                        </h5>
                    </div>
                    <div className="col-xs-4">
                        <div style={{float: 'none', margin: '0px auto'}}>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target={"#"+categoria.Nome}>
                                Descricao
                            </button>
                        </div>
                        <div className="modal fade" id={categoria.Nome} tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog" role="document">
                                <div className="modal-content">
                                    <div className="modal-header">
                                        <h5 className="modal-title" id="exampleModalLabel">Categoria: {categoria.Nome}</h5>
                                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                            <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <div className="modal-body">
                                        <h4>{categoria.Descricao}</h4>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-primary" data-dismiss="modal">Ok</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div style={{float: 'none', margin: '0px auto'}}>
                            <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}} 
                                onClick={() => self.onSelected(categoria.Valor)}>
                                Selecionar
                            </button>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row vertical-offset-100">
                    <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                            <div className="panel-heading">                                
                                <div className="row-fluid user-row" style={{height:'100px'}}>
                                    <img src={Logo} className="img-responsive" alt="Aurora" style={{height: '100%'}} />
                                </div>                        
                                <div className="row-fluid user-row" style={{marginTop:'15px'}}>
                                    <div className="row">
                                        <div className="col-xs-6">
                                            <button className="btn btn-success" disabled={!this.state.jogar} 
                                                style={{width: '100%',height: '40px',borderRadius: '0px'}} 
                                                onClick={this.JogarNovamente}>
                                                Jogar Novamente
                                            </button>
                                        </div>
                                        <div className="col-xs-6">
                                            <center>
                                                <h4>
                                                    Pontuação: {this.state.pontuacao}
                                                </h4>
                                            </center>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <form acceptCharset="UTF-8" role="form" className="form-signin">
                                    <fieldset>
                                        <div className="row">
                                            <div className="col-xs-4">
                                                <div style={{width: '70px', float: 'none', margin: '0px auto'}}>
                                                    <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}} 
                                                    onClick={() => this.onClick('dado1')} disabled={this.state.dados.dado1 != ''}>{this.state.dados.dado1 != '' ? "Ok" : "Jogar"}</button>
                                                </div>
                                                <input className="form-control inputDado" placeholder="X" id="username" type="text" disabled={true}
                                                    style={{borderRadius: '0px'}} maxLength="1" 
                                                    value={this.state.dados.dado1 || ""} />
                                            </div>
                                            <div className="col-xs-4">
                                                <div style={{width: '70px', float: 'none', margin: '0px auto'}}>
                                                    <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}}
                                                    onClick={() => this.onClick('dado2')} disabled={this.state.dados.dado2 != ''}>{this.state.dados.dado2 != '' ? "Ok" : "Jogar"}</button>
                                                </div>
                                                <input className="form-control inputDado" placeholder="X" id="username" type="text" disabled={true}
                                                    style={{borderRadius: '0px'}} maxLength="1"
                                                    value={this.state.dados.dado2 || ""} />
                                            </div>
                                            <div className="col-xs-4">
                                                <div style={{width: '70px', float: 'none', margin: '0px auto'}}>
                                                    <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}}
                                                    onClick={() => this.onClick('dado3')} disabled={this.state.dados.dado3 != ''}>{this.state.dados.dado3 != '' ? "Ok" : "Jogar"}</button>
                                                </div>
                                                <input className="form-control inputDado" placeholder="X" id="username" type="text" disabled={true}
                                                    style={{borderRadius: '0px'}} maxLength="1"
                                                    value={this.state.dados.dado3 || ""} />
                                            </div>

                                            
                                            <div className="col-xs-6">
                                                <div style={{width: '70px', float: 'none', margin: '0px auto'}}>
                                                    <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}}
                                                    onClick={() => this.onClick('dado4')} disabled={this.state.dados.dado4 != ''}>{this.state.dados.dado4 != '' ? "Ok" : "Jogar"}</button>
                                                </div>
                                                <input className="form-control inputDado" placeholder="X" id="username" type="text" disabled={true} 
                                                    style={{borderRadius: '0px'}} maxLength="1"
                                                    value={this.state.dados.dado4 || ""} />
                                            </div>
                                            <div className="col-xs-6">
                                                <div style={{width: '70px', float: 'none', margin: '0px auto'}}>
                                                    <button className="btn btn-success" style={{width: '100%',borderRadius: '0px'}}
                                                    onClick={() => this.onClick('dado5')} disabled={this.state.dados.dado5 != ''}>{this.state.dados.dado5 != '' ? "Ok" : "Jogar"}</button>
                                                </div>
                                                <input className="form-control inputDado" placeholder="X" id="username" type="text" disabled={true} 
                                                    style={{borderRadius: '0px'}} maxLength="1"
                                                    value={this.state.dados.dado5 || ""} />
                                            </div>
                                        </div>
                                        <br></br>
                                        <input className="btn btn-lg btn-success btn-block" type="submit" id="login" onClick={this.GetValues} 
                                            value="Verificar" disabled={!this.state.verificar} />
                                        <div className="dados">
                                            <div className="loading">
                                                {this.state.loading ? 
                                                    (
                                                        <img src={LoadingImg} className="img-responsive" alt="Aurora" style={{height: '100px'}} />
                                                    ) 
                                                :
                                                    (
                                                        <div></div>
                                                    )
                                                }
                                            </div>
                                            <div className="categorias">
                                                {categoriaExists ? (
                                                    <div>
                                                        <div className="row"><br /></div> 
                                                        <div className="row">
                                                            <div className="col-xs-12">
                                                                <center>
                                                                    <h4>
                                                                        Categorias de Pontuação
                                                                    </h4>
                                                                </center>
                                                            </div>
                                                        </div>
                                                        <div className="row">
                                                            <div className="col-xs-4">
                                                                <center>
                                                                    <h5 style={{fontWeight: "bold"}}>
                                                                        Categoria
                                                                    </h5>
                                                                </center>
                                                            </div>
                                                            <div className="col-xs-4">
                                                                <center>
                                                                    <h5 style={{fontWeight: "bold"}}>
                                                                        Pontuação
                                                                    </h5>
                                                                </center>
                                                            </div>
                                                        </div>
                                                        {objCategorias}
                                                    </div>
                                                ) : <div></div>}
                                            </div>
                                        </div>
                                    </fieldset>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Jogo