describe('express form testing', ()=>{
    const axios = require('axios');
    const readline = require('readline');
    const fixture = require('./fixture')
    const index =require('./saved');
  
    it('should return an html form', async (done)=>{
        try {
            const html = await axios.get("http://127.0.0.1:8081/new_visitor")
            expect(html.data).toEqual(fixture)
        } catch (err) {
            console.log(err)
        }
        done()
    })
    it('Should post the form', async()=>{
        const visitor={
            vname: 'Weston',
            aname: 'Bobby',
            age:12,
            date: '2020-03-03',
            time:'01:01',
            comments: 'this is going to work'
        }
        const res = await axios.post('http://127.0.0.1:8081/new_visitor', visitor);

		let id = res.data.match(/\d+/g)[2];

		expect(res.data).toEqual(index(
				id, visitor.vname,visitor.aname, visitor.age, visitor.date, visitor.time, visitor.comments
			));	
    })
})