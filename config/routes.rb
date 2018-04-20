Rails.application.routes.draw do
  namespace :v1 do
    get '/jobs' => 'jobs#index'
    get '/jobs/:id' => 'jobs#show'
    post '/jobs' => 'jobs#create'
    patch '/jobs/:id' => 'jobs#update'
    delete '/jobs'=> 'jobs#destroy'

    get '/job_seekers' => 'job_seekers#index'
    get '/job_seekers/:id' => 'job_seekers#show'
    post '/job_seekers' => 'job_seekers#create'
    patch '/job_seekers/:id' => 'job_seekers#update'
    delete '/job_seekers'=> 'job_seekers#destroy'

    get '/businesses' => 'businesses#index'
    # get '/businesses' => 'businesses#new'
    get '/businesses/:id' => 'businesses#show'
    post '/businesses' => 'businesses#create'
    patch '/businesses/:id' => 'businesses#update'
    delete '/businesses'=> 'businesses#destroy'

    get '/matches' => 'matches#index'
    get '/matches/:id' => 'matches#show'
    post '/matches' => 'matches#create'
    patch '/matches/:id' => 'matches#update'
    delete '/matches'=> 'matches#destroy'

    get '/hr_reps' => 'hr_reps#index'
    get '/hr_reps/:id' => 'hr_reps#show'
    post '/hr_reps' => 'hr_reps#create'
    patch '/hr_reps/:id' => 'hr_reps#update'
    delete '/hr_reps'=> 'hr_reps#destroy'
  end
end
