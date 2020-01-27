Rails.application.routes.draw do
  get 'hello_world', to: 'hello_world#index'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root 'home#index'
  get 'login', to: 'sessions#new', as: 'login'
  get 'logout', to: 'sessions#destroy'

  resources :sessions, only: %i[ create ]

  resources :product_categories, only: [] do
    member do
      get "products"
    end
  end

  resources :admin, only: %i[ index ] do
    collection do
      post "add_product"
    end
  end

  resources :products, only: %i[ update destroy ] do
    member do
      post "add_variant"
      get "product_variants"
    end
  end

  resources :product_variants, only: %i[ destroy ]
end
