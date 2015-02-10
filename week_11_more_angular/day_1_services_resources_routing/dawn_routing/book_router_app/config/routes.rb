Rails.application.routes.draw do
  root to: "books#index"
  resources :books
  match "*path", to: "books#index", via: "get"
end
