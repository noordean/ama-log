Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  resources :sessions, only: %i[ create ]
  resources :admin, only: %i[ index ]

  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy'
  get 'category/:id/products', to: 'product_categories#products'
  post 'add_product', to: 'admin#add_product'
  get 'product/:id/product_variants', to: 'products#product_variants'
end
