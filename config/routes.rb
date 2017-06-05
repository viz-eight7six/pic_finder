Rails.application.routes.draw do
  root "static_pages#root"
  resources :dictionaries do
    get 'search'
  end
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
