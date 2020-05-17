class BrandsController < ApplicationController
  def index
    brands = Brand.all
    render json: brands, include: :guitar
  end

  def show
  end
end
