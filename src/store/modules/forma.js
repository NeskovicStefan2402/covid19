const state={
    tabela:[],
    podaci:{},
    zarazeno:0,
    umrlo:0,
    aktivno:0,
    statistika:[],
    drzave:[],
    koordinate:null,
    koordinateSrbija:null,
    vesti:[],
    domaceVesti:[],
    informacije:[],
    izabrani:[]
}

const mutations={
    'GET_TABELA'(state){
        axios
      .get('http://localhost:5000/get_table_data')
      .then(response => (state.tabela = response))
    },
    'GET_STATS'(state){
        axios
      .get('http://localhost:5000/getStats')
      .then(response => {
          state.koordinate=null;
          state.koordinateSrbija=null;
          state.statistika = response.data['Statistika']
        state.statistika.forEach(element => {
            state.drzave.push(element[0]);
        });  
    })},
    'GET_SERBIA_STATS'(state){
        axios
      .get('http://localhost:5000/getDomaceStats')
      .then(response => {
          state.koordinate=null;
          state.koordinateSrbija = response.data['Statistika']
          state.koordinateSrbija.forEach(element => {
              if(element['vrednosti'][0]>0){
                  state.izabrani.push(element)
              }
          });
    })
    },
    'POST_COUNTRY'(state,ele){
        console.log(ele);
        axios.post('http://localhost:5000/postCountry',{
            drzava:''+ele
        }).then(response=>{
            state.koordinateSrbija=null;
            state.koordinate=response.data['Koordinate']
            state.statistika.forEach(element => {
                if(ele==element[0]){
                    state.zarazeno=element[1]
                    state.aktivno=element[6]
                    state.umrlo=element[3]
                }
            });
        })
    },
    'GET_VESTI'(state){
        axios.get('http://localhost:5000/getNews')
        .then(response=>{
            state.vesti=response.data['Vesti']
        })
    },
    'GET_DOMACE_VESTI'(state){
        axios.get('http://localhost:5000/getDomaceVesti')
        .then(response=>{
            state.domaceVesti=response.data['Vesti']
        })
    },
    'GET_INFORMACIJE'(state){
        axios.get('http://localhost:5000/getDomaceInfo')
        .then(response=>{
            state.informacije=response.data['Informacije']
        })
    }
}

const actions={
    getTabela({commit}){
        commit('GET_TABELA');
    },
    get_stats({commit}){
        commit('GET_STATS');
    },
    get_Serbia_stats({commit}){
        commit('GET_SERBIA_STATS');
    },
    vratiKoordinate({commit},drzava){
        commit('POST_COUNTRY',drzava);
    },
    vratiVesti({commit}){
        commit('GET_VESTI')
    },
    vratiDomaceVesti({commit}){
        commit('GET_DOMACE_VESTI')
    },
    vratiInformacije({commit}){
        commit('GET_INFORMACIJE')
    }
}

export default{
    state,
    mutations,
    actions
}