const state={
    tabela:[]
}

const mutations={
    'GET_TABELA'(state){
        axios
      .get('https://192.168.0.145:5000/get_table_data')
      .then(response => (state.tabela = response))
    }
}

const actions={
    getTabela({commit}){
        commit('GET_TABELA');
    }

}

export default{
    state,
    mutations,
    actions
}