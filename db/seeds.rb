# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Business.create(name:"Greater Metro Financial", address:"11 Sunflower Ave Paramus NJ", zip:"07652")
# Business.create(name:"Chesapeake Note Solutions", address:"6611 Greenspring Avenue Baltimore MD", zip:"21209", website:"chesapeakenotes.com")
# Business.create(name:"DS Accounting Group", address:"2833 Smith Ave. Ste. 268 Baltimore MD", zip:"21209", website:"www.dsaccountinggroup.com")
#      HrRep.create(title:"CEO", name:"Alan Mendlowitz", phone_1:"(201) 632-2206",email:"alan.mendlowitz@prudential.com", business_id:1) 
#       HrRep.create(title:"CEO", name:"Marjorie Binder", phone_1:"(410) 205-2962",email:"marge@chesapeakenotes.com", business_id:2)  
#       HrRep.create(title:"CEO", name:"David Steingroot", phone_1:"(410) 336-9677",email:"dsteingroot@dsaccountinggroup.com", business_id:3) 
#       Job.create(occupation:"accountant",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:1)
#       Job.create(occupation:"banker",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:2)
#       Job.create(occupation:"accountant",experience:"2-3 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:3)
#       JobSeeker.create(name:"Josef Gestener", email:"josephgestetner@gmail.com", zip:"08701", status:"seeking", occupation:"cyber security", experience:"0", work_value:"achievement", self_awesomeness:"I am a genious")
#       JobSeeker.create(name:"Steven Friedman", email:"steve.y.f@gmail.com", zip:"11559", status:"seeking", occupation:"Accounting", experience:"4", work_value:"achievement", self_awesomeness:"I am a rock star")
#       JobSeeker.create(name:"Test", email:"test@gmail.com", zip:"08701", status:"seeking", occupation:"testing", experience:"0", work_value:"achievement", self_awesomeness:"testing")
#       JobSeeker.create(name:"ben Sofer", email:"asdfgadf", zip:"08701", status:"seeking", occupation:"cyber security", experience:"0", work_value:"achievement", self_awesomeness:"I am a hard worker")

Business.create(name:"Test1", address:"1122222 Sunflower Ave Paramus NJ", zip:"07652", id:5)
Business.create(name:"Test2", address:"661111111111 Greenspring Avenue Baltimore MD", zip:"21209", website:"wwwwwwwwww.chesapeakenotes.com", id:6)
Business.create(name:"Test3", address:"2833333333 Smith Ave. Ste. 268 Baltimore MD", zip:"21209", website:"wwwwwwwwww.dsaccountinggroup.com", id:7)
     HrRep.create(title:"CFO", name:"Bob", phone_1:"(201) 632-2206",email:"bob@prudential.com", business_id:5) 
      HrRep.create(title:"CFO", name:"Jamie", phone_1:"(410) 205-2962",email:"Jamie@chesapeakenotes.com", business_id:6)  
      HrRep.create(title:"CFO", name:"Dave", phone_1:"(410) 336-9677",email:"dave@dsaccountinggroup.com", business_id:7) 
      Job.create(occupation:"accountant",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:5)
      Job.create(occupation:"banker",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:6)
      Job.create(occupation:"accountant",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:7)
      JobSeeker.create(name:"Joe", email:"joe@gmail.com", zip:"08701", status:"seeking", occupation:"cyber security", experience:"0", work_value:"achievement", self_awesomeness:"I am a genious")
      JobSeeker.create(name:"Steve", email:"steve@gmail.com", zip:"11559", status:"seeking", occupation:"accounting", experience:"4", work_value:"achievement", self_awesomeness:"I am a rock star")
      JobSeeker.create(name:"Test", email:"test@gmail.com", zip:"08701", status:"seeking", occupation:"accounting", experience:"0", work_value:"achievement", self_awesomeness:"testing")
      JobSeeker.create(name:"Ben Sofer", email:"asdfgadf", zip:"08701", status:"seeking", occupation:"cyber security", experience:"0", work_value:"achievement", self_awesomeness:"I am a hard worker")
     