class SiteController < ApplicationController

  before_action :is_authenticated?

  def index
    # @user = User.find(session[:user_id])
    # render text: @user.email
    render text: "Hi #{current_user.email}!!!, This is my secret page"
  end
end
