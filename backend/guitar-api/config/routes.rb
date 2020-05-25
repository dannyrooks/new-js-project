Rails.application.routes.draw do
  resources :brands, only: [:index, :show, :create, :destroy] 
  resources :guitars, only: [:index, :create]
  
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
