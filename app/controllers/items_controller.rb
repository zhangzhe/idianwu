class ItemsController < ApplicationController
  def index
    if params[:search]
      @items = Item.search(params[:search]).paginate(:page => params[:page] || 1, :per_page => 10)
    else
      @items = Item.paginate(:page => params[:page] || 1, :per_page => 10)
    end
  end

  def show
    @item = Item.find(params[:id])
  end

  def new
    @item = Item.create
  end

  def edit
    @item = Item.find(params[:id])
  end

  def create
    @item = Item.new(params[:item])
    if @item.save
      redirect_to @item, notice: 'Item was successfully created.'
    else
      render action: "new"
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update_attributes(params[:item])
      redirect_to @item, notice: 'Item was successfully updated.'
    else
      render action: "edit"
    end
  end

  def destroy
    @item = Item.find(params[:id])
    @item.destroy
    redirect_to items_url
  end
end
