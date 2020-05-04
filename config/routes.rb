Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: { format: :json } do 
    resources :users, only: [:create, :show, :update]
    resource :session, only: [:create, :destroy]
    resources :experiences, only: [:create, :index, :show, :update, :destroy]
    resources :educations, only: [:create, :index, :show, :update, :destroy]
    resources :connection_requests, only: [:create, :show, :destroy]
    resources :connections, only: [:create, :show]
    resources :posts
    resources :comments
  end
  
  root to: 'static_pages#root'

end
