class BrandsController < ApplicationController

  # GET /brands
  def index
      brands = Brand.all
    #   options = {}
    #   options[:include] = [:guitars]
      
      render json: brands
  end
  
  def show
      options = {}
      options[:include] = [:guitars, :'guitars.category', :'guitars.year', :'guitars.brand_id']
   
      brand = brand.find_by(id: params[:id])
      render json: BrandSerializer.new(brand, options)
  end
  # POST /brands
  def create
      
      new_brand = Brand.new(brand_params)
      if new_brand.save
          render json: new_brand
      else
          render json: new_brand.errors
      end
  end
 
  def destroy
      brand = Brand.find_by(id: params[:id])
      brand.destroy
  end

  private

  def brand_params
      params.require(:brand).permit(:name, :id)
  end
end







