Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"
  get 'greeting', to: 'apis#show', as: 'greeting_path'
  get '*page', to: 'apis#index', as: 'index_path', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
  root 'apis#show'
end
