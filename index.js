//import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
supabase = supabase.createClient('https://biqfnvbxdsqheuezpnho.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJpcWZudmJ4ZHNxaGV1ZXpwbmhvIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NTM3MTYwODAsImV4cCI6MTk2OTI5MjA4MH0.T9g-UrQ0Bqfhqk6dpPKfrRmHXVaL2lq1NsIyGt2pr1g')


async function onPress() {

    // var text = document.getElementById('input1').value;
    // console.log(text);

    // const { data, error } = await supabase
    //     .from('foodInfo')
    //     .insert([
    //         { food_name: text }
    //     ])


    // fetch
    const { data2, error2 } = await supabase
    .from('foodInfo')
    .select('food_name')
    .match({id : 1})

     var h =document.getElementById('title') ;
     h.innerHTMl = data2[1].food_name;

}



