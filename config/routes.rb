Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {formats: :json} do
    resource :session, only: [:create, :destroy]
    resource :users, only: [:create] do
      resource :tracks, only: [:index]
    end
    resources :tracks, only: [:index, :create, :show, :destroy]
  end
  root "static_pages#root"
end
