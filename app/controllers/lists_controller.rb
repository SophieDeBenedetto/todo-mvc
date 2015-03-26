class ListsController < ApplicationController

  def index
    @lists = List.order("created_at DESC")
    @list = List.new

  end

  def create
    @list = List.new(unicorn_params)
    if @list.save 
      render layout: false
    else
      render :index
    end

  end

  private

  def unicorn_params
    params.require(:list).permit(:title)
  end
end