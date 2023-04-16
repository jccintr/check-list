
export default {
 
  
 
    getItems: async () => {
        const req = await fetch('https://x8ki-letl-twmt.n7.xano.io/api:xR9a0v67/lista', {
            method: 'GET',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
           
        });
        const json = await req.json();
        return json;

    },
    
    deleteItem: async (id) => {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:xR9a0v67/lista/${id}`, {
            method: 'DELETE',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
    
        });
      return response;
      },
      updateItem: async (id,checked) => {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:xR9a0v67/lista/${id}`, {
            method: 'PUT',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ checked })
    
        });
      return response;
      },
      addItem: async (newItem) => {
        const response = await fetch(`https://x8ki-letl-twmt.n7.xano.io/api:xR9a0v67/lista`, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newItem)
    
        });
      return response;
      },
     
};

