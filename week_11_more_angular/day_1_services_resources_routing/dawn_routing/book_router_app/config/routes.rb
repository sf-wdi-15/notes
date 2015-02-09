Rails.application.routes.draw do
  root to: "books#index"
  match "*path", to: "books#index", via: "get"
end
