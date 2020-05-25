class GuitarsController < ApplicationController
  def index
    guitars = Guitar.all
    render json: guitars
  end

  def show
    guitar = Guitar.find_by(params[:id])
    render json: GuitarSerializer.new(guitar)
  end

  def create
    binding.pry
    newGuitar = Guitar.create(brand_id: params['guitar']['brand_id'], name: params['guitar']['name'], category: params['guitar']['category'], year: params['guitar']['year'])
    newGuitar.brand_name = Brand.find_by(id: params['guitar']['brand_id']).name
    newGuitar.save
    render json: newGuitar
  end

  def destroy
    guitar = Guitar.find_by(id: params[:id])
  end


end