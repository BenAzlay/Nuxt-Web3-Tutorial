const web3 = {
    namespaced: true,
    state: () => ({
        web3: {
            networkId: null,
            coinbase: null,
            balance: null,
        },
    }),
    getters: {
        getInstance: (state) => {
            return state.web3
        },
    },
    mutations: {
        registerWeb3Instance (state, payload) {
            console.log('registerWeb3instance Mutation being executed', payload)
            let result = payload
            let web3Copy = state.web3
            web3Copy.coinbase = result.coinbase
            web3Copy.networkId = result.networkId
            web3Copy.balance = parseInt(result.balance, 10)
            state.web3 = web3Copy
        },
    },
    actions: {
    }
  }
  
  export default web3
  