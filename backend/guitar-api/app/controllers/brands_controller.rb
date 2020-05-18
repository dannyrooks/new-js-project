class BrandsController < ApplicationController
  def index
    brands = Brand.all
    options = {}
    options[:include] = [:guitar]
    render json: BrandSerializer.new(brands)
  end

  def show
    brand = Brand.find_by(params[:id])
    render json: BrandSerializer.new(brand)
  end
end
