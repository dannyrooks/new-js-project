class GuitarsController < ApplicationController
  def index
    guitars = Guitar.all
    render json: guitars, include: :brand
  end

  def show
  end
end
