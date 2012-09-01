class ImagesController < ApplicationController
  def index
    @item = Item.find_by_id(params[:item_id])
    @images = @item.images
    @image = @item.images.new
  end
  
  def create
    @item = Item.find_by_id(params[:item_id])
    @image = @item.images.create(params[:image])
    redirect_to :back
  end
  
  def destroy
    @image = Image.find_by_id(params[:id])
    @image.destroy
    redirect_to :back
  end
end
