Rails.application.routes.draw do
  namespace "api" do
    namespace "v1" do
      post "/tokensignin", to: "validators#check"
      resources :headphones, except: [:new, :edit] do
        resources :reviews, except: [:new, :edit]
      end
    end
  end
end
