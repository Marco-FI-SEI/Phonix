Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      resources :headphones, except: [:new, :edit]
      resources :reviews, except: [:new, :edit]
      post "/tokensignin", to: "validators#check"
    end
  end
end
