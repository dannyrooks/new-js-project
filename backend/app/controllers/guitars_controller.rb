class GuitarsController < ApplicationController
  def index
    guitars = Guitar.all
    render json: guitars
    # render json: GuitarSerializer.new(guitars)
    # options = {}
    # options[:include] = [:brand]
    # render json: GuitarSerializer.new(guitars, options)
  end

  def show
    options = {}
    options[:include] = [:brand, :'brand.brand_id', :'brand.brand_name']
    
    guitar = Guitar.find_by(params[:id])
    render json: GuitarSerializer.new(guitar, options)
  end

  def create
    # binding.pry
    # new_guitar = Guitar.new(guitar_params)
    #   if new_guitar.save
    #     render json: GuitarSerializer.new(new_guitar)
    #   else
    #     render json: new_guitar.errors
    #   end
    newGuitar = Guitar.create(brand_id: params['guitar']['brand_id'], name: params['guitar']['name'], category: params['guitar']['category'], year: params['guitar']['year'])
    newGuitar.brand_name = Brand.find_by(id: params['guitar']['brand_id']).name
    newGuitar.save
    render json: newGuitar
  end

  def destroy
    guitar = Guitar.find_by(id: params[:id])
    guitar.destroy
  end

  private

  def guitar_params
    params.require(:guitar).permit(:name, :category, :year, :brand_id, :brand_name)
  end 


end