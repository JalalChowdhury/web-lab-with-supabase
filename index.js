//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
supabase = supabase.createClient('https://biqfnvbxdsqheuezpnho.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcWZudmJ4ZHNxaGV1ZXpwbmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MTYwODAsImV4cCI6MTk2OTI5MjA4MH0.T9g-UrQ0Bqfhqk6dpPKfrRmHXVaL2lq1NsIyGt2pr1g')



// post data 
async function onPress() {

    var text = document.getElementById('input1').value;
    //console.log(text);

    const { data, error } = await supabase
        .from('foodInfo')
        .insert([
            { food_name: text }
        ])
        alert('Added Food item.')

}
// or 
// document.getElementById('btn').addEventListener("click", async (e) => {
//     e.preventDefault();
//     var text = document.getElementById('input1').value;
//     const { data, error } = await supabase
//         .from('foodInfo')
//         .insert([
//             { food_name: text }
//         ])


//     console.log(data);
// })



// get data
const fetchData= async (e) =>{
    e.preventDefault();

    const { data, error } = await supabase
        .from('foodInfo')
        .select('food_name')
        //.match({id: 3})

    document.getElementById('title').innerHTML = `
        <h1>Food Items: </h1>
        
        <li>${data[0].food_name}</li>
        <li>${data[1].food_name}</li>
        <li>${data[2].food_name}</li>
        <li>${data[3].food_name}</li>
        <li>${data[17].food_name}</li>     
      
    `

}



