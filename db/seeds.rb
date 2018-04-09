# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# Business.create(name:"Greater Metro Financial", address:"11 Sunflower Ave Paramus NJ", zip:"07652")
# Business.create(name:"Chesapeake Note Solutions", address:"6611 Greenspring Avenue Baltimore MD", zip:"21209", website:"chesapeakenotes.com")
# # Business.create(name:"DS Accounting Group", address:"2833 Smith Ave. Ste. 268 Baltimore MD", zip:"21209", website:"www.dsaccountinggroup.com")
#      HrRep.create(title:"CEO", name:"Alan Mendlowitz", phone_1:"(201) 632-2206",email:"alan.mendlowitz@prudential.com", business_id:1) 
#       HrRep.create(title:"CEO", name:"Marjorie Binder", phone_1:"(410) 205-2962",email:"marge@chesapeakenotes.com", business_id:2)  
#       HrRep.create(title:"CEO", name:"David Steingroot", phone_1:"(410) 336-9677",email:"dsteingroot@dsaccountinggroup.com", business_id:3) 
      # Job.create(occupation:"accountant",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:1)
      # Job.create(occupation:"banker",experience:"1-2 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:2)
      # Job.create(occupation:"accountant",experience:"2-3 years",job_awesomeness:"bla bla bla",file_upload:"url:hasdasasdas",status:"active", business_id:3)
      JobSeeker.create (name:)
     t.string "name"
    t.string "email"
    t.string "phone"
    t.string "zip"
    t.string "status"
    t.string "occupation"
    t.string "experience"
    t.string "work_value"
    t.text "self_awesomeness"
     